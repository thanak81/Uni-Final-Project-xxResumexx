import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter"
import bcrypt from "bcrypt"
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react";

const prisma = new PrismaClient();
export const authOptions = {
    adapter: PrismaAdapter(prisma),
    
    providers:[
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
      ,
        CredentialsProvider({
            name : "Credentials",
            credentials: {
                email :{},
                password: {},
            },
            async authorize(credentials,req){
              const register = await fetch(`${process.env.NEXTAUTH_URL}/api/login`,{
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
              })
              const data = await register.json()
              if(register.ok && data){
                return data;
              }else{
                return null;;
              }
            }
        })
    ],
    session: {
        strategy: "jwt",
      },

    callbacks: {
      // async signIn({account,profile}){
      //   console.log(account)
      //   if(!profile?.email){
      //     throw new Error("No Profile")
      //   }
      //   await prisma.user.upsert({
      //     where: {
      //       email: profile.email
      //     },
      //     create: {
      //       email: profile.email,
      //       name: profile.name
      //     },
      //     update: {
      //       name: profile.name
      //     }
      //   })

      //   return true;
      // },
        async session({ session, token}) {
          session.user = token.user;
          session.provider = token.provider;
          session.user.id = token.id || token.sub
          return session;
        },
        async jwt({ token, user ,account}) {
          if (user) {
            token.user = user;
            token.provider = account.provider;
          }
          return token;
        },
      },
    secret : process.env.NEXTAUTH_SECRET,
    
    pages: {
        signIn: "/login",
    },
}


const handler = NextAuth(authOptions);

export {handler as GET , handler as POST}
"use client";
import { SessionProvider } from "next-auth/react";

import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

function AuthProvider({ children }) {
  const queryClient = new QueryClient()
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </SessionProvider>
  );
}

export default AuthProvider;

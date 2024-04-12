"use client"
import React from 'react'
import {create} from "zustand"

    export const useStore = create((set)=> ({
        name: "",
        email:"",
        address: "",
        number: "",
        summary: "",
        setName : (newValue) => set({name: newValue}),
        setEmail : (newValue) => set({email: newValue}),
        setAddress : (newValue) => set({address: newValue}),
        setNumber : (newValue) => set({number: newValue}),
        setSummary: (newValue) => set({summary:newValue})
    }))

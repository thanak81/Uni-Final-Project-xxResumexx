"use client"
import React from 'react'
import {create} from "zustand"

    export const useStore = create((set)=> ({
        value: "",
        setValue : (newValue) => set({value: newValue})
    }))

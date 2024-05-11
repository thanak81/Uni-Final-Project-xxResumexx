"use client";
import React from "react";
import { create } from "zustand";

export const useStore = create((set) => ({
  name: "",
  email: "",
  address: "",
  number: "",
  summary: "",
  setName: (newValue) => set({ name: newValue }),
  setEmail: (newValue) => set({ email: newValue }),
  setAddress: (newValue) => set({ address: newValue }),
  setNumber: (newValue) => set({ number: newValue }),
  setSummary: (newValue) => set({ summary: newValue }),
}));

// Active state to open/close resume on create form
export const useActive = create((set) => ({
  active: false,
  setActive: () => set((state) => ({ active: !state.active })),
}));

export const useActiveRight = create((set) => ({
  activeRight: false,
  setActiveRight: () => set((state) => ({ activeRight: !state.activeRight })),
}));

export const usePadding = create((set) => ({
  value: 10,
  setValue: (newValue) => set({ value: newValue }),
}));

export const useLineHeight = create((set) => ({
  value: 30,
  setValue: (newValue) => set({ value: newValue }),
}));

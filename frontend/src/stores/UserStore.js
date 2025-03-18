import { useEffect } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const userStore = create(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isLoggedIn: false,
      role: "user",
      setUser: (user) => set({ user }),
      setRole: (role) => set({ role }),
      setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn }),
      setTokens: (accessToken, refreshToken) =>
        set({ accessToken, refreshToken }),
      logout: () =>
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isLoggedIn: false,
        }),
    }),
    {
      name: "user-session", // the key used in localStorage to store the session
      getStorage: () => localStorage, // use localStorage to persist the state
    }
  )
);

export default userStore;

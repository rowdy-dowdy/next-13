"use client"
// import { SessionProvider } from "next-auth/react";
import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(null);

async function getUser () {
  
}

export default function AuthLayoutContext({ children }: {children: React.ReactNode}) {
  const [user, setUser] = useState(null)
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
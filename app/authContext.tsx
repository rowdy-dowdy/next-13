'use client';
// import { SessionProvider } from "next-auth/react";
import { createContext, Dispatch, useContext, useState, SetStateAction } from 'react';
import { TypeUser } from "@/pages/api/auth/login";

export const AuthContext = createContext<[TypeUser | null, Dispatch<SetStateAction<TypeUser | null>> | null]>([null, null]);

async function getUser() {}

export default function AuthLayoutContext({
  children,
  data
}: {
  children: React.ReactNode;
  data: TypeUser | null
}) {
  const [user, setUser] = useState<TypeUser | null>(data);
  return <AuthContext.Provider value={[user, setUser]}>{children}</AuthContext.Provider>;
}

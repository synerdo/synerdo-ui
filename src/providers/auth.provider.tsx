"use client";

import { Api } from "@/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await Api.get("/users/me");

        router.replace("/rooms");
      } catch (err) {
        console.error(err);
      }
    };

    checkAuth();
  }, [router]);

  return children;
}

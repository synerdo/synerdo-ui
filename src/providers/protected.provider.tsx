"use client";

import { Api, IUsersMe } from "@/api";
import { useUserStore } from "@/stores";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedProviderProps {
  children: React.ReactNode;
}

export function ProtectedProvider({ children }: ProtectedProviderProps) {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await Api.get<IUsersMe>("/users/me");

        const user = response.data;

        setUser(user);
      } catch (err) {
        console.error(err);

        router.replace("/auth");
      }
    };

    checkAuth();
  }, [setUser, router]);

  return children;
}

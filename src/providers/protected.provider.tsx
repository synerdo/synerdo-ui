"use client";

import { Api } from "@/api";
import { IUser } from "@/interfaces";
import { useUserStore } from "@/stores";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtectedProviderProps {
  children: React.ReactNode;
}

export function ProtectedProvider({ children }: ProtectedProviderProps) {
  const router = useRouter();
  const setUser = useUserStore((s) => s.setUser);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await Api.get<IUser>("/users/me");

        const user = response.data;

        setUser(user);
      } catch (err) {
        console.error(err);

        router.replace("/auth");
      }

      setIsLoading(false);
    };

    checkAuth();
  }, [setUser, router]);

  return isLoading ? null : children;
}

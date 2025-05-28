"use client";

import { Api } from "@/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await Api.get("/users/me");

        router.replace("/rooms");
      } catch (err) {
        console.error(err);
      }

      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  return isLoading ? null : children;
}

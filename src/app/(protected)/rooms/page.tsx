"use client";

import { Api } from "@/api";
import { useEffect, useState } from "react";

export default function RoomsPage() {
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Api.get("/accesstest/");

        setIsAllowed(true);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return <h1>{isAllowed ? "Allowed" : "Not Allowed"}</h1>;
}

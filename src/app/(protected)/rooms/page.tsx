"use client";

import { useUserStore } from "@/stores";

export default function RoomsPage() {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      <h1>Rooms</h1>

      {user?.username}
    </div>
  );
}

import { ProtectedProvider } from "@/providers";

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ProtectedProvider>{children}</ProtectedProvider>;
}

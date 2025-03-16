import { AuthContent } from "@/components/auth";
import { SearchParams } from "@/types";

export default async function AuthPage({
  searchParams,
}: {
  searchParams?: Promise<SearchParams>;
}) {
  const pageSearchParams = (await searchParams) || {};

  return <AuthContent searchParams={pageSearchParams} />;
}

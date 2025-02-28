export default async function Dynamic({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div>
      <p>Dynamic Page {id}</p>
    </div>
  );
}

interface Props {
  params: Promise<{ boxId: string }>;
}

export default async function BoxDetailPage({ params }: Props) {
  const boxId = (await params).boxId;

  // return <BoxDetailManagement boxId={boxId} />;
  return (
    <>
      Box-
      <span>{boxId}</span>
    </>
  );
}

import { medium } from "@/app/layout";
import ParticipantList from "@/components/Content/PlacementTest/ParticipantList";
import { getPlacementTest } from "@/api/server/placementTest";

export default async function Page({ params }: { params: { id: string } }) {
  const placementTest = await getPlacementTest(parseInt(params.id));

  return (
    <div className="mx-auto max-w-[1200px]">
      <h1 className={`text-4xl text-text-primary ${medium.className}`}>
        {`시즌 ${placementTest.season} 배치고사`}
      </h1>
      <ParticipantList participants={placementTest.participants} />
    </div>
  );
}

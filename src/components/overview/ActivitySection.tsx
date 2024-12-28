// # Component
import ImportantGuide from "@/components/overview/ImportantGuide";
import RecentActivity from "@/components/overview/RecentActivity";
import RecentTransaction from "@/components/overview/RecentTransaction";
import ServiceWarning from "@/components/overview/ServiceWarning";

export default function ActivitySection() {
  return (
    <div className={"mt-8 grid grid-cols-4 gap-x-8"}>
      <ImportantGuide />
      <RecentActivity />
      <RecentTransaction />
      <ServiceWarning />
    </div>
  );
}

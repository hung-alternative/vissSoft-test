// # Component
import { Button } from "@/components/ui/button";
import ActivityList from "@/components/overview/ActivityList";

export default function RecentTransaction() {
  return (
    <ActivityList
      title={"Giao dịch gần đây"}
      extra={
        <Button
          variant={"primary"}
          className={"h-8 px-4 text-base font-medium normal-case"}
        >
          Xem thêm
        </Button>
      }
      items={[]}
      emptyMessage={"Chưa có giao dịch nào gần đây"}
    />
  );
}

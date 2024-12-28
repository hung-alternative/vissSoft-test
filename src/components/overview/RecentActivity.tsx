// # Component
import { Button } from "@/components/ui/button";
import ActivityList from "@/components/overview/ActivityList";
import Link from "next/link";

export default function RecentActivity() {
  return (
    <ActivityList
      title={"Hoạt động gần đây"}
      extra={
        <Link href={"/recent?tab=activity"}>
          <Button
            variant={"primary"}
            className={"h-8 px-4 text-base font-medium normal-case"}
          >
            Xem thêm
          </Button>
        </Link>
      }
      items={[
        {
          title: "Kích hoạt",
          description: "IP:192.168.1.10000",
          extra: (
            <div className={"space-y-3"}>
              <p>12/12/2012</p>
              <p>11:47:30 AM</p>
            </div>
          ),
        },
      ]}
      emptyMessage={"Không có hoạt động nào"}
    />
  );
}

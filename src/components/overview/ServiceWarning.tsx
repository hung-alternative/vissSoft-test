// # Component
import ActivityList from "@/components/overview/ActivityList";

export default function ServiceWarning() {
  return (
    <div className={"flex flex-col gap-6"}>
      <section>
        <h2 className={"mb-[15px] text-2xl font-semibold text-black"}>
          Danh sách dịch vụ sắp hết hạn
        </h2>
        <ActivityList
          items={[]}
          emptyMessage={"Hiện chưa có dịch vụ nào sắp hết hạn"}
        />
      </section>
      <section>
        <h2 className={"mb-3 text-2xl font-semibold text-black"}>
          Danh sách dịch vụ sắp bị xóa
        </h2>
        <ActivityList
          items={[]}
          emptyMessage={"Hiện chưa có dịch vụ nào sắp bị xóa"}
        />
      </section>
    </div>
  );
}

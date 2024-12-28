export interface StatsCardProps {
  iconUrl: string;
  title: string;
  value: string;
}

// # Component
export default function StatsCard({ iconUrl, title, value }: StatsCardProps) {
  return (
    <div
      className={
        "flex h-[150px] flex-col justify-between rounded-[20px] bg-white p-4 shadow-viss-btn"
      }
    >
      <img src={iconUrl} alt={title} className={"size-8"} />
      <div className={"flex flex-col gap-3 text-black"}>
        <p className={"text-[32px] font-bold"}>{value}</p>
        <p className={"text-base font-light"}>{title}</p>
      </div>
    </div>
  );
}

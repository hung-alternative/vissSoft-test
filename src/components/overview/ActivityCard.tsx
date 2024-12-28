import { cn } from "@/lib/utils";

type Item = {
  title: string;
  description?: string;
  extra?: React.ReactNode;
};

export interface ActivityCardProps {
  item: Item;
}

// # Component
export default function ActivityCard({ item }: ActivityCardProps) {
  const { title, description, extra } = item;

  return (
    <div
      className={cn("rounded-xl bg-[#A7C6FF] p-4 text-black shadow-viss-btn", {
        flex: extra,
      })}
    >
      <Normal title={title} description={description} />
      {extra && <div className={"text-base font-light"}>{extra}</div>}
    </div>
  );
}

function Normal({ title, description }: Item) {
  return (
    <div className={"flex flex-1 flex-col gap-3"}>
      <p className={"text-base font-normal"}>{title}</p>
      {description && <p className={"text-base font-light"}>{description}</p>}
    </div>
  );
}

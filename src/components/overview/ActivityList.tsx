import ActivityCard, {
  ActivityCardProps,
} from "@/components/overview/ActivityCard";
import { cn } from "@/lib/utils";

interface Props {
  title?: string;
  extra?: React.ReactNode;
  items: ActivityCardProps["item"][];
  emptyMessage: string;
  className?: string;
}

// # Component
export default function ActivityList({
  title,
  extra,
  items,
  emptyMessage,
  className,
}: Props) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {title && (
        <header className={"flex shrink-0 justify-between"}>
          <span className={"text-base font-normal text-black"}>{title}</span>
          {extra}
        </header>
      )}
      <ul className={"flex flex-col gap-3"}>
        {items.map((item, index) => (
          <li key={index}>
            <ActivityCard item={item} />
          </li>
        ))}
        {items.length === 0 && <ActivityCard item={{ title: emptyMessage }} />}
      </ul>
    </div>
  );
}

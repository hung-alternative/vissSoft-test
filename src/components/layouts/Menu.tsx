import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  key: string;
  icon: React.ReactNode;
  label: React.ReactNode;
  type?: "dropdown";
};

export interface MenuProps {
  items: Item[];
}

// # Component
export default function Menu({ items }: MenuProps) {
  const pathname = usePathname();

  return (
    <ul className={"flex w-full flex-col gap-6"}>
      {items.map((item) => (
        <li key={item.key}>
          <Link href={item.key}>
            <Button
              className={"w-full justify-start pl-[30px]"}
              variant={
                (item.key === "/" && pathname === item.key) ||
                (item.key !== "/" && pathname.startsWith(item.key))
                  ? "primary"
                  : "transparent"
              }
            >
              {item.icon}
              <span>{item.label}</span>
              {item.type === "dropdown" && (
                <img src={"images/arrow-down.svg"} />
              )}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

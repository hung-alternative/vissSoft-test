"use client";

// # Component
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { getAccount } from "@/sevices/accountService";

export default function Header() {
  const { data } = useQuery({
    queryKey: ["account"],
    queryFn: getAccount,
  });

  return (
    <header
      className={
        "shadow-viss-header flex h-[146px] items-center justify-between bg-[#6E9CF4] pl-[66px]"
      }
    >
      <h1 className={"text-[32px] font-bold text-white text-shadow-viss"}>
        BÁO CÁO TỔNG QUAN
      </h1>
      <div className={"mr-[15px] flex items-center gap-[23px]"}>
        <Button variant={"secondary"} className={"text-shadow-none px-4"}>
          <span className={"flex flex-col"}>
            <span>SỐ DƯ</span>
            <span
              className={"text-xs"}
            >{`${data?.totalBalance.toLocaleString() || "0"} VND`}</span>
          </span>
          <img src="images/plus.svg" alt="plus" />
        </Button>
        <Button className={"w-[200px]"}>
          <img src="images/user.svg" alt="user" />
          <span>{data?.name || ""}</span>
        </Button>
      </div>
    </header>
  );
}

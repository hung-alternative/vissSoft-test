"use client";

// # Component
import Menu, { MenuProps } from "@/components/layouts/Menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "/",
      icon: <img src={"images/dashboard.svg"} alt={"dashboard"} />,
      label: "BÁO CÁO",
    },
    {
      key: "/box",
      icon: <img src={"images/box.svg"} alt={"box"} />,
      label: "BOX",
    },
    {
      key: "/proxy",
      icon: <img src={"images/proxy.svg"} alt={"proxy"} />,
      label: "PROXY",
    },
    {
      key: "/account",
      icon: <img src={"images/account.svg"} alt={"account"} />,
      label: "TÀI KHOẢN",
    },
    {
      key: "payment",
      icon: <img src={"images/payment.svg"} alt={"payment"} />,
      label: "THANH TOÁN",
      type: "dropdown",
    },
  ];

  return (
    <div
      className={"relative h-full w-[400px]"}
      style={
        {
          "--viss-deg": "18deg",
        } as Record<string, string>
      }
    >
      <Button
        onClick={() => setCollapsed(!collapsed)}
        variant={"icon"}
        className={"fixed left-[400px] top-[49px] z-50 w-12 -translate-x-1/2"}
      >
        <img
          src={"images/arrow.svg"}
          className={cn("mt-2", {
            "-scale-x-100": collapsed,
          })}
        />
      </Button>

      <div
        className={
          "bg-viss-gradient fixed inset-0 flex w-[400px] flex-col justify-between gap-6 overflow-y-auto p-[60px] pr-10"
        }
      >
        <img src="images/logo.svg" alt="logo" className={"w-[130px]"} />
        <Menu items={items} />
        <Button variant={"secondary"} className={"w-full shrink-0"}>
          <img src={"images/logout.svg"} alt={"logout"} />
          <span>Đăng xuất</span>
        </Button>
      </div>
    </div>
  );
}

// # Component
import { Layout, Menu, MenuProps } from "antd";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { createStyles } from "antd-style";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const { Sider } = Layout;

const useStyle = createStyles(({ css }) => {
  return {
    customSider: css`
      .ant-menu {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      .ant-menu-item {
        border-radius: 20px;
        height: 60px;
        background: rgba(255, 255, 255, 0.3);
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        backdrop-filter: blur(4px);
        color: #fff;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        font-size: 24px;
        font-weight: 700;
      }

      .ant-menu-item-selected {
        background: conic-gradient(
          from 202deg at 73.17% 16.67%,
          #0050e5 0deg,
          #003baa 360deg
        );
      }

      .ant-menu-title-content {
        margin-left: 12px;
      }
    `,
  };
});

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const { styles } = useStyle();

  const MenuItems: MenuProps["items"] = [
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
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={setCollapsed}
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "unset",
        insetInlineStart: 0,
        background:
          "conic-gradient( from 23deg at 15.95% 85.6%, #0050e5 0deg, #003baa 360deg )",
        boxShadow: "inset -8px 8px 4px 0 rgba(0, 0, 0, 0.25)",
      }}
      className={cn(
        styles.customSider,
        "fixed bottom-0 left-0 top-0 h-screen overflow-auto",
      )}
      width={400}
      trigger={null}
    >
      <Button
        size={"icon"}
        className={"absolute right-0 top-10 z-50 translate-x-1/2"}
      >
        <img src={"images/arrow.svg"} className={"h-[26px] w-[17px]"} />
      </Button>

      <div
        className={"flex h-full w-full flex-col justify-between p-[60px] pr-10"}
      >
        <div className={"flex flex-[2] flex-col gap-[158px]"}>
          <img src="/images/Logo.svg" alt="logo" className={"w-[130px]"} />
          <Menu
            mode="inline"
            selectedKeys={[pathname]}
            items={MenuItems}
            style={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
        </div>
        <div className={"flex h-full flex-1 items-end"}>
          <Button variant={"secondary"} className={"w-full"}>
            <img src="/images/logout.svg" alt="logout" />
            <span>Đăng xuất</span>
          </Button>
        </div>
      </div>
    </Sider>
  );
}

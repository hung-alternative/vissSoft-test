// # Component
import StatsCard, { StatsCardProps } from "@/components/overview/StatsCard";
import { useQuery } from "@tanstack/react-query";
import { getAccount } from "@/sevices/accountService";

export default function Statistics() {
  const { data } = useQuery({
    queryKey: ["account"],
    queryFn: getAccount,
  });

  const items: StatsCardProps[] = [
    {
      iconUrl: "images/service.svg",
      value: "10",
      title: "Tổng dịch vụ",
    },
    {
      iconUrl: "images/cart.svg",
      value: "0",
      title: "Đơn hàng đang xử lý",
    },
    {
      iconUrl: "images/payment-solid.svg",
      value: `${data?.totalBalance.toLocaleString() || "0"} VND`,
      title: "Tài khoản chính",
    },
  ];

  return (
    <div className={"grid grid-cols-3 gap-x-8"}>
      {items.map((item) => (
        <StatsCard key={item.title} {...item} />
      ))}
    </div>
  );
}

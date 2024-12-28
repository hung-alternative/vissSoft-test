// # Component
import { Button } from "@/components/ui/button";
import ActivityList from "@/components/overview/ActivityList";

export default function ImportantGuide() {
  return (
    <ActivityList
      title={"Những bài hướng dẫn quan trọng"}
      extra={
        <div className={"space-x-1"}>
          <Button
            variant={"iconPrimary"}
            className={"w-8 text-base font-medium"}
          >
            {"<"}
          </Button>
          <Button
            variant={"iconPrimary"}
            className={"w-8 text-base font-medium"}
          >
            {">"}
          </Button>
        </div>
      }
      items={[
        {
          title: "Thông tin đăng nhập",
          description: "Tên đăng nhập: admin, Mật khẩu: 123456",
        },
        {
          title: "Thông tin đăng nhập",
          description: "Tên đăng nhập: admin, Mật khẩu: 123456",
        },
        {
          title: "Thông tin đăng nhập",
          description: "Tên đăng nhập: admin, Mật khẩu: 123456",
        },
        {
          title: "Thông tin đăng nhập",
          description: "Tên đăng nhập: admin, Mật khẩu: 123456",
        },
        {
          title: "Thông tin đăng nhập",
          description: "Tên đăng nhập: admin, Mật khẩu: 123456",
        },
        {
          title: "Thông tin đăng nhập",
          description: "Tên đăng nhập: admin, Mật khẩu: 123456",
        },
        {
          title: "Thông tin đăng nhập",
          description: "Tên đăng nhập: admin, Mật khẩu: 123456",
        },
      ]}
      emptyMessage={"Không có bài hướng dẫn nào"}
    />
  );
}

"use client";

import { Switch, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getBoxes } from "@/sevices/boxService";
import BoxActions from "@/components/actions/BoxActions";
import CreateBox from "@/components/actions/CreateBox";

type DataType = {
  key: string;
  id: string;
  name: string;
  status: boolean;
};

// # Component
export default function BoxManagement() {
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["boxes"],
    queryFn: getBoxes,
  });

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      className:
        "group-hover:cursor-pointer group-hover:font-semibold group-hover:underline",
      onCell: (record, index) => {
        return {
          onClick: () => {
            router.push(`/box/${record.id}`);
          },
        };
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value, record, index) => {
        return <Switch value={value} />;
      },
    },
    {
      title: "Action",
      width: 250,
      render: (value, record, index) => {
        return (
          <BoxActions
            box={{
              id: record.id,
              name: record.name,
              status: record.status,
            }}
          />
        );
      },
    },
  ];

  const dataSource: DataType[] =
    data?.map((item) => ({
      key: item.id.toString(),
      id: item.id.toString(),
      name: item.name,
      status: item.status,
    })) ?? [];

  return (
    <div className={"px-8 py-6"}>
      <h1 className={"mb-6 text-2xl font-semibold"}>Box Management</h1>
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        loading={isLoading}
        showSorterTooltip={false}
        title={() => <CreateBox />}
        rowClassName={"group"}
      />
    </div>
  );
}

// # Component
import { Button, Form, FormProps, Input, Modal, Switch } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import useMessage from "@/hooks/useMessage";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { deleteBox, updateBox } from "@/sevices/boxService";

type FieldType = {
  id: string;
  name: string;
  status: boolean;
};

interface Props {
  box: {
    id: string;
    name: string;
    status: boolean;
  };
}

export default function BoxActions({ box }: Props) {
  const { finishMethod, contextHolder } = useMessage();
  const [openModal, setOpenModal] = useState(false);
  const [form] = Form.useForm();

  const updateBoxMutation = useMutation({
    mutationFn: updateBox,
    ...finishMethod("update box", ["boxes"], () => {
      form.resetFields();
      setOpenModal(false);
    }),
  });

  const deleteBoxMutation = useMutation({
    mutationFn: deleteBox,
    ...finishMethod("delete box", ["boxes"]),
  });

  const handleFinished: FormProps<FieldType>["onFinish"] = (values) => {
    updateBoxMutation.mutate({
      id: box.id,
      name: values.name,
      status: values.status,
    });
  };

  return (
    <>
      {contextHolder}
      <div className={"flex flex-col gap-2"}>
        <Button
          type={"primary"}
          icon={<SettingOutlined />}
          style={{ backgroundColor: "#4ade80", color: "#4b5569" }}
        >
          Config
        </Button>
        <div className={"flex gap-2"}>
          <Button
            onClick={() => setOpenModal(true)}
            type={"primary"}
            icon={<EditOutlined />}
          >
            Edit
          </Button>
          <Button
            onClick={() => deleteBoxMutation.mutate(box.id)}
            loading={deleteBoxMutation.isPending}
            type={"primary"}
            danger
            style={{ backgroundColor: "#fca5a5", color: "#4b5569" }}
            className={"flex-1"}
            icon={<DeleteOutlined />}
          >
            Delete
          </Button>
        </div>
      </div>

      <Modal
        title="Update Box"
        okText="Update"
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={null}
        centered
        destroyOnClose
      >
        <Form
          form={form}
          layout={"vertical"}
          autoComplete="off"
          scrollToFirstError
          onFinish={handleFinished}
          initialValues={{
            name: box.name,
            status: box.status,
          }}
        >
          <Form.Item<FieldType>
            name="name"
            label={"Box Name"}
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType> name="status" label={"Status"}>
            <Switch />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <div className="flex justify-end space-x-2">
              <Button onClick={() => setOpenModal(false)}>Cancel</Button>
              <Button
                type="primary"
                htmlType="submit"
                loading={updateBoxMutation.isPending}
              >
                Create
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

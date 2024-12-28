// # Component
import { Button, Form, FormProps, Input, Modal, Switch } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useMutation } from "@tanstack/react-query";
import { createBox } from "@/sevices/boxService";
import useMessage from "@/hooks/useMessage";
import { useState } from "react";

type FieldType = {
  name: string;
  status: boolean;
};

export default function CreateBox() {
  const { finishMethod, contextHolder } = useMessage();
  const [openModal, setOpenModal] = useState(false);
  const [form] = Form.useForm();

  const createMutation = useMutation({
    mutationFn: createBox,
    ...finishMethod("create", ["boxes"], () => {
      form.resetFields();
      setOpenModal(false);
    }),
  });

  const handleFinished: FormProps<FieldType>["onFinish"] = (values) => {
    createMutation.mutate(values);
  };

  return (
    <>
      {contextHolder}
      <Button
        onClick={() => setOpenModal(true)}
        type={"primary"}
        icon={<PlusOutlined />}
      >
        Add Box
      </Button>

      <Modal
        title="Create Box"
        okText="Create"
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
                loading={createMutation.isPending}
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

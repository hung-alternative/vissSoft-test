import { message } from "antd";
import { NoticeType } from "antd/es/message/interface";
import { useQueryClient } from "@tanstack/react-query";

export type FinishMethodType = (
  action: string,
  invalidateQueryKey?: string[],
  afterFinishCb?: () => void,
) => {
  onError: () => void;
  onSuccess: () => void;
};

export default function useMessage() {
  const [messageApi, contextHolder] = message.useMessage();
  const queryClient = useQueryClient();

  const openMessage = (type: NoticeType, message: string) => {
    messageApi.open({
      type: type,
      content: message,
    });
  };

  const finishMethod: FinishMethodType = (
    action: string,
    invalidateQueryKey?: string[],
    afterFinishCb?: () => void,
  ) => {
    return {
      onSuccess: () => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        invalidateQueryKey &&
          queryClient.invalidateQueries({
            queryKey: invalidateQueryKey,
          });
        openMessage("success", `${action} successfully`);
        afterFinishCb?.();
      },
      onError: () => {
        openMessage("error", `${action} failed`);
      },
    };
  };

  return {
    openMessage,
    contextHolder,
    finishMethod,
  };
}

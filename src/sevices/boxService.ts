import { apiCall } from "@/sevices/baseService";
import axios from "axios";
import { BoxType } from "@/data";

export const getBoxes = async (): Promise<BoxType[]> => {
  return apiCall(() => axios.get("/api/box"));
};

type CreateBoxParams = {
  name: string;
  status: boolean;
};

export const createBox = async ({
  name,
  status,
}: CreateBoxParams): Promise<string> => {
  return apiCall(() => axios.post("/api/box", { name, status }));
};

type UpdateBoxParams = {
  id: string;
  name: string;
  status: boolean;
};

export const updateBox = async ({
  id,
  name,
  status,
}: UpdateBoxParams): Promise<string> => {
  return apiCall(() => axios.patch(`/api/box/${id}`, { name, status }));
};

export const deleteBox = async (id: string): Promise<string> => {
  return apiCall(() => axios.delete(`/api/box/${id}`));
};

import { Account } from "@/data";
import { apiCall } from "@/sevices/baseService";
import axios from "axios";

export const getAccount = async (): Promise<Account> => {
  return apiCall(() => axios.get("/api/account"));
};

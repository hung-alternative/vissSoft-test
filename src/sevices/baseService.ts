import { AxiosResponse } from "axios";

const handleResponse = async <T>(response: AxiosResponse) => {
  if (!response.status) {
    throw new Error("API request failed");
  }

  return response.data.data as T;
};

export async function apiCall<T>(
  apiRequest: () => Promise<AxiosResponse<T>>,
): Promise<T> {
  try {
    const response = await apiRequest();
    return handleResponse(response);
  } catch (error) {
    throw new Error("API request failed");
  }
}

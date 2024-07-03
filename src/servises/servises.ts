import axios from "axios";

const BASE_URL = "http://localhost:3000";

export interface ITransactions {
  TransactionId: number;
  Status: string;
  Type: string;
  ClientName: string;
  Amount: number;
}
type UpdateTransaction = {
  id: number;
  status: string;
};

export const getAllTransactions = async () => {
  const { data } = await axios.get<ITransactions[]>(`${BASE_URL}/transactions`);

  return data;
};
export const getTransactionById = async (id: number) => {
  const { data } = await axios.get(`${BASE_URL}/transactions/${id}`);
  return data;
};
export const addAllTransactions = async (formData: object) => {
  const { data } = await axios.post(`${BASE_URL}/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log(data);
  return data;
};
export const updateTransactionStatus = async ({
  id,
  status,
}: UpdateTransaction) => {
  const { data } = await axios.patch(`${BASE_URL}/transactions/${id}/status`, {
    status,
  });
  return data;
};

export const deleteTransactionById = async (id: number) => {
  await axios.delete(`${BASE_URL}/transactions/${id}`);
};

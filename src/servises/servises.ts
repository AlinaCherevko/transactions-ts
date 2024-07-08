import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api",
});
//const BASE_URL = "http://localhost:3000/api";

// ----------set token----------//
const setToken = (token: string) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  return localStorage.getItem("token");
};
// ----------delete token----------//
const deleteToken = () => {
  localStorage.removeItem("token");
};
// interceptors for adding token to requests headers
instance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export interface IUser {
  name: string;
  email: string;
  password: string;
}

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
  const { data } = await instance.get<ITransactions[]>(`/transactions`);

  return data;
};
export const getTransactionById = async (id: number) => {
  const { data } = await instance.get(`/transactions/${id}`);
  return data;
};
export const addAllTransactions = async (formData: object) => {
  const { data } = await instance.post(`/upload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  //console.log(data);
  return data;
};
export const updateTransactionStatus = async ({
  id,
  status,
}: UpdateTransaction) => {
  const { data } = await instance.patch(`/transactions/${id}/status`, {
    status,
  });
  return data;
};

export const deleteTransactionById = async (id: number) => {
  await instance.delete(`/transactions/${id}`);
};
//------------------auth requests---------------//

export const registerUser = async (credentials: IUser) => {
  const { data } = await instance.post(`/user/signup`, credentials);
  //console.log(data);
  return data;
};
export const logInUser = async (credentials: Omit<IUser, "name">) => {
  const { data } = await instance.post(`/user/login`, credentials);

  setToken(data.token);
  //console.log(data);
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await instance.get(`/user/current`);
  //console.log(data);
  return data;
};

export const logOutUser = async () => {
  deleteToken();
};

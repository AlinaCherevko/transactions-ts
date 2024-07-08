import { create } from "zustand";
import { getCurrentUser, logOutUser } from "../servises/servises";

interface IUserData {
  name: string;
  email: string;
}
export interface IZustant {
  user: IUserData | null;
  isAuth: boolean;
  login: (user: IUserData) => void;
  logout: () => void;
  checkAuth: () => void;
  isLoading: boolean;
}

export const useAuthZustant = create<IZustant>((set) => ({
  user: null,
  isAuth: false,
  isLoading: false,
  login: (user) => set({ user, isAuth: true }),
  logout: () => {
    logOutUser();
    set({ user: null, isAuth: false });
  },

  checkAuth: async () => {
    try {
      set({ isLoading: true });
      const data = await getCurrentUser();
      //console.log(data);
      set({ user: data, isAuth: true });
    } catch (error) {
      //console.log(error);
      set({ user: null, isAuth: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));

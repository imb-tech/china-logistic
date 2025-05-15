import { create } from "zustand";

export type User = Record<string, any>;

type UserState = {
    storeData: User | null;
    setStoreData: (user: User) => void;
    clearUserData: () => void;
};

export const useStoreData = create<UserState>()((set) => ({
    storeData: null,
    setStoreData: (user: User) => set({ storeData: user }),
    clearUserData: () => set({ storeData: null}),
}));

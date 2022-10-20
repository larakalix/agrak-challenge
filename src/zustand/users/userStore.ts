import create from "zustand";
import { MOCK_USERS } from "../../data/data";
import { UserStore } from "../../interfaces/store/UserStore";

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    fetch: async () => {
        const users = MOCK_USERS;
        set({ users });
    },
}));

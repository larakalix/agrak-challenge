import create from "zustand";
import { MOCK_USERS } from "../../data/data";
import { UserStore } from "../../interfaces/store/UserStore";

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    user: null,
    fetch: async () => {
        const users = MOCK_USERS;
        set({ users });
    },
    getUser: async (id) => {
        const user = MOCK_USERS.filter((user) => user.id === id)[0];
        set({ user });
    },
    cleanUser: () => set({ user: null }),
}));

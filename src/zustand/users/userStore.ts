import axios from "axios";
import create from "zustand";
import { User } from "../../interfaces/data/user";
import { UserStore } from "../../interfaces/store/UserStore";

const api_uri = "https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users";

export const useUserStore = create<UserStore>((set) => ({
    users: [],
    user: null,
    fetch: async () => {
        const { data: users } = await axios.get(api_uri);
        set({ users });
    },
    getUser: async (id) => {
        const { data: user } = await axios.get(`${api_uri}/${id}`);
        set({ user });
    },
    cleanUser: () => set({ user: null }),
}));

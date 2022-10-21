import axios from "axios";
import create from "zustand";
import { UserStore } from "@interfaces/store/UserStore";

const api_uri = "https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users";

const useUserStore = create<UserStore>((set) => ({
    users: [],
    user: null,
    loading: false,
    fetch: async () => {
        const { data: users } = await axios.get(api_uri);
        set({ users });
    },
    setLoading: () => set((state) => ({ loading: !state.loading })),
    setUser: async (user) => set({ user }),
    getUser: async (id) => {
        const { data: user } = await axios.get(`${api_uri}/${id}`);
        set({ user });
    },
    createUser: async (payload) => {
        const { data: user } = await axios.post(api_uri, {
            ...payload,
            avatar: `https://api.multiavatar.com/${payload.first_name.toLowerCase()}.png`,
        });

        set({ user });
        return user;
    },
    updateUser: async (id, payload) => {
        const { data: user } = await axios.put(`${api_uri}/${id}`, {
            ...payload,
            avatar: payload.avatar
                ? payload.avatar
                : `https://api.multiavatar.com/${payload.first_name.toLowerCase()}.png`,
        });
        set({ user });
    },
    deleteUser: async (id) => {
        const { data: user } = await axios.delete(`${api_uri}/${id}`);
        return !!user;
    },
}));

export default useUserStore;

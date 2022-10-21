import axios from "axios";
import create from "zustand";
import { UserStore } from "@interfaces/store/UserStore";
import { INITIAL_VALUES } from "@views/user/constants/constants";

// Should be in an env variable
const api_uri = "https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users";

const useUserStore = create<UserStore>((set) => ({
    users: [],
    user: null,
    fetch: async () => {
        const { data: users } = await axios.get(api_uri);
        set({ users });
    },
    setUser: async (user) => set({ user }),
    getUser: async (id) => {
        if (!id) set({ user: INITIAL_VALUES });
        else {
            const { data: user } = await axios.get(`${api_uri}/${id}`);
            set({ user });
        }
    },
    createUser: async (payload) => {
        const { data: user } = await axios.post(api_uri, payload);
        set({ user });

        return user;
    },
    updateUser: async (id, payload) => {
        const { data: user } = await axios.put(`${api_uri}/${id}`, payload);
        set({ user });
    },
    deleteUser: async (id) => {
        const { data: user } = await axios.delete(`${api_uri}/${id}`);

        return !!user;
    },
}));

export default useUserStore;

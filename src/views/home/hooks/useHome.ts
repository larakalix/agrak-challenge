/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useUserStore from "@zustand/users/userStore";

export const useHome = () => {
    const { users, fetch } = useUserStore((state) => state);

    useEffect(() => {
        const getUsers = async () => await fetch();

        getUsers();
    }, []);

    return {
        users,
    };
};

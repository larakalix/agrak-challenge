/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useUserStore from "@zustand/users/userStore";
import { User } from "@interfaces/data/user";

const INITIAL_VALUES: User = {
    id: "",
    first_name: "",
    second_name: "",
    email: "",
    avatar: "",
    createdAt: "",
};

export const useDetail = (id: string | undefined) => {
    const { user, getUser, setUser } = useUserStore((state) => state);

    useEffect(() => {
        const getDetail = async () => await getUser(id!);
        if (id) getDetail();
        else setUser(INITIAL_VALUES);

        return () => {
            setUser(null);
        };
    }, [id]);

    return {
        user,
    };
};

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useUserStore from "@zustand/users/userStore";

export const useDetail = (id: string | undefined) => {
    const { user, getUser, setUser } = useUserStore((state) => state);

    useEffect(() => {
        const getDetail = async (id: string | undefined) => await getUser(id);

        getDetail(id);

        return () => {
            setUser(null);
        };
    }, [id]);

    return {
        user,
    };
};

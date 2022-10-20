/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useUserStore } from "../../../../zustand/users/userStore";

export const useDetail = (id: string | undefined) => {
    const { user, getUser, cleanUser } = useUserStore((state) => state);

    useEffect(() => {
        const getDetail = async () => await getUser(id!);
        if (id) getDetail();

        return () => {
            cleanUser();
        };
    }, [id]);

    return {
        user,
    };
};

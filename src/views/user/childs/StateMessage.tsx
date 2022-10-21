import { GenericMsgProps } from "@interfaces/generic/generic";

export const StateMessage = ({ message }: GenericMsgProps) => {
    return (
        <span className="text-center p-4 bg-black text-white block mb-4 rounded-sm shadow-sm text-[0.8rem]">
            {message}
        </span>
    );
};

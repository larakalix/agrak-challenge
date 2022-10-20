interface Props {
    message: string;
}

export const Message = ({ message }: Props) => {
    return (
        <div className="flex items-center justify-center w-full shadow-sm rounded-sm min-h-[50vh]">
            <h4>{message}</h4>
        </div>
    );
};

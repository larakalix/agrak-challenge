interface Props {
    children: JSX.Element | JSX.Element[];
}

export const ViewWrapper = ({ children }: Props) => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen max-w-screen-lg m-auto">
            {children}
        </div>
    );
};

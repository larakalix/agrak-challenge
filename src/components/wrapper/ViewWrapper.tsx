import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { ViewWrapperProps } from "@interfaces/components/ViewWrapper";

export const ViewWrapper = ({
    showActions = false,
    children,
}: ViewWrapperProps) => {
    return (
        <div className="flex justify-start items-center flex-col min-h-screen max-w-screen-lg m-auto mt-8">
            {showActions && (
                <ul className="w-full flex items-center justify-start">
                    <li>
                        <Link to="/">
                            <div className="flex items-center">
                                <IoIosArrowBack />{" "}
                                <span className="text-[0.9rem] ml-2">
                                    Back to home
                                </span>
                            </div>
                        </Link>
                    </li>
                </ul>
            )}

            {children}
        </div>
    );
};

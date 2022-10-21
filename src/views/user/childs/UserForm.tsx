import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import clsx from "clsx";
import { User } from "@interfaces/data/user";
import { UseFormField } from "./UseFormField";
import { ActionType } from "@enums/enums";
import useUserStore from "@zustand/users/userStore";
import { userValidationSchema } from "@validationSchemas/user";

interface Props {
    user: User;
    type: ActionType;
}

const INITIAL_VALUES: User = {
    id: "",
    first_name: "",
    second_name: "",
    email: "",
    avatar: "",
    createdAt: "",
};

export const UserForm = ({ user, type }: Props) => {
    const navigate = useNavigate();
    const { createUser, updateUser } = useUserStore((state) => state);

    const buttonLabel = {
        [ActionType.Edit]: "Save",
        [ActionType.New]: "Create",
    }[type];

    const buttonStyles = clsx({
        "bg-green-400 hover:bg-green-500": type === ActionType.Edit,
        "bg-blue-400 hover:bg-blue-500": type === ActionType.New,
    });

    const redirect = () => {
        setTimeout(() => {
            navigate("/");
        }, 1000);
    };

    return (
        <Formik
            initialValues={user ? user : INITIAL_VALUES}
            validationSchema={userValidationSchema}
            onSubmit={async (values, actions) => {
                if (type === ActionType.Edit) {
                    await updateUser(user.id, values);
                    redirect();
                    return;
                }

                await createUser(values);
                redirect();
            }}
        >
            {({ errors, isSubmitting }) => (
                <Form className="w-full">
                    {isSubmitting ? (
                        <span className="text-center p-4 bg-black text-white block mb-4 rounded-sm shadow-sm text-[0.8rem]">
                            Submitting...
                        </span>
                    ) : null}
                    <UseFormField
                        label="First Name"
                        name="first_name"
                        isSubmitting={isSubmitting}
                    />
                    <UseFormField
                        label="Second Name"
                        name="second_name"
                        isSubmitting={isSubmitting}
                    />
                    <UseFormField
                        label="Email"
                        name="email"
                        isSubmitting={isSubmitting}
                    />

                    <ul className="flex items-center space-x-3">
                        <li>
                            <button
                                disabled={
                                    isSubmitting ||
                                    Object.keys(errors).length > 0
                                }
                                className={`${buttonStyles} px-4 py-4 uppercase text-white rounded-sm shadow-sm transition-colors text-[0.8rem]`}
                                type="submit"
                            >
                                {buttonLabel}
                            </button>
                        </li>
                        <li>
                            <Link
                                aria-disabled={isSubmitting}
                                to="/"
                                className="bg-red-400 hover:bg-red-500 px-4 py-4 uppercase text-white rounded-sm shadow-sm transition-colors block text-[0.8rem]"
                            >
                                Cancel
                            </Link>
                        </li>
                    </ul>
                </Form>
            )}
        </Formik>
    );
};

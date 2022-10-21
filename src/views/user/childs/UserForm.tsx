import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import clsx from "clsx";
import { UseFormField } from "./UseFormField";
import { ActionType } from "@enums/enums";
import useUserStore from "@zustand/users/userStore";
import { userValidationSchema } from "@validationSchemas/user";
import { FORM_FIELDS, LABELS } from "../constants/constants";
import { StateMessage } from "./StateMessage";
import { UserFormProps } from "@interfaces/components/UserForm";

export const UserForm = ({ user, type }: UserFormProps) => {
    const navigate = useNavigate();
    const { createUser, updateUser } = useUserStore((state) => state);

    const labels = LABELS[type];

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
            enableReinitialize
            initialValues={user}
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
                        <StateMessage message={labels.submit} />
                    ) : null}

                    {FORM_FIELDS.map(({ label, name }) => (
                        <UseFormField
                            key={`field_${name}`}
                            label={label}
                            name={name}
                            isSubmitting={isSubmitting}
                        />
                    ))}

                    <ul className="flex items-center justify-between">
                        <li>
                            <button
                                disabled={
                                    isSubmitting ||
                                    Object.keys(errors).length > 0
                                }
                                className={`${buttonStyles} px-12 py-4 uppercase text-white rounded-sm shadow-sm transition-colors text-[0.8rem]`}
                                type="submit"
                            >
                                {labels.button}
                            </button>
                        </li>
                        {!isSubmitting && (
                            <li>
                                <Link
                                    to="/"
                                    className="border border-red-400 text-red-500 px-4 py-4 rounded-sm shadow-sm transition-colors block text-[0.8rem]"
                                >
                                    Cancel
                                </Link>
                            </li>
                        )}
                    </ul>
                </Form>
            )}
        </Formik>
    );
};

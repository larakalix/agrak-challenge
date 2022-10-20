import { Field, FieldMetaProps } from "formik";

interface Props {
    label: string;
    name: string;
    isSubmitting: boolean;
}

export const UseFormField = ({ label, name, isSubmitting }: Props) => {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name} className="text-[0.8rem] mb-2">
                {label}
            </label>
            <Field name={name}>
                {({ field, meta }: any) => (
                    <div>
                        <input
                            disabled={isSubmitting}
                            placeholder={label}
                            {...field}
                            className="border border-gray-400 rounded-sm shadow-sm py-3 px-6 text-[0.8rem] w-full"
                        />
                        {meta.touched && meta.error && (
                            <div className="error">{meta.error}</div>
                        )}
                    </div>
                )}
            </Field>
        </div>
    );
};

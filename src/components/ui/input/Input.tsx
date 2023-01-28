import { Field } from "formik";
import { FC } from "react";

const CustomInput: FC<any> = ({
  label,
  field,
  form: { touched, errors },
  ...props
}) => {
  return (
    <label className="">
      <div className="flex justify-between items-center mb-1">
        <p
          className={`font-semibold text-sm ${
            touched[field.name] && errors[field.name]
              ? "text-red-600"
              : "text-dark-blue"
          }`}
        >
          {label}
        </p>
        {touched[field.name] && errors[field.name] && (
          <p className="text-red-600 text-sm">{errors[field.name]}</p>
        )}
      </div>
      <input
        type="text"
        {...field}
        {...props}
        className={`border w-full outline-none rounded-md px-4 py-2 ${
          touched[field.name] && errors[field.name] ? "border-red-400" : ""
        }`}
      />
    </label>
  );
};

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ name, label, placeholder }) => (
  <Field
    name={name}
    label={label}
    placeholder={placeholder}
    component={CustomInput}
  />
);

export default Input;

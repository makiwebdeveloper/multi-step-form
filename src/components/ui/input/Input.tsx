import { FC } from "react";
import { Field } from "formik";
import styles from "./Input.module.scss";

const CustomInput: FC<any> = ({
  label,
  field,
  form: { touched, errors },
  ...props
}) => {
  return (
    <label>
      <div className={styles.infoContainer}>
        <p
          className={
            touched[field.name] && errors[field.name]
              ? styles.notValidLabel
              : styles.validLabel
          }
        >
          {label}
        </p>
        {touched[field.name] && errors[field.name] && (
          <p className={styles.errorText}>{errors[field.name]}</p>
        )}
      </div>
      <input
        type="text"
        {...field}
        {...props}
        className={
          touched[field.name] && errors[field.name]
            ? styles.notValidInput
            : styles.validInput
        }
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

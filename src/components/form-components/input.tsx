import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type PropsType<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  register: UseFormRegister<FieldValues>;
  id?: string;
  labelText?: string;
  labelClassName?: string;
  inputClassName?: string;
};

const InputField = <TFieldValues extends FieldValues>(
  props: PropsType<TFieldValues>
) => {
  const { labelText, name, labelClassName, inputClassName, id, register } =
    props;

  return (
    <>
      {labelText ? (
        <label htmlFor="amount" className={labelClassName}>
          {labelText}
        </label>
      ) : null}

      <input
        {...register(name)}
        id={id}
        type="text"
        className={inputClassName}
      />
    </>
  );
};

export default InputField;

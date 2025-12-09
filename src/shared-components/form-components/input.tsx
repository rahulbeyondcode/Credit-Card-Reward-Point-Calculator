import {
  useController,
  type Control,
  type FieldValues,
  type Path,
} from "react-hook-form";

type PropsType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  id?: string;
  type?: "text" | "number";
  labelText?: string;
  labelClassName?: string;
  inputClassName?: string;
};

const InputField = <T extends FieldValues>(props: PropsType<T>) => {
  const { labelText, name, labelClassName, inputClassName, id, control, type } =
    props;

  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  return (
    <>
      {labelText ? (
        <label htmlFor={id || name} className={labelClassName || ""}>
          {labelText}
        </label>
      ) : null}

      <input
        {...field}
        onChange={(e) => {
          if (type === "number") {
            // allow only digits
            if (/^\d*$/.test(e.target.value)) {
              field.onChange(e);
            }
          } else {
            field.onChange(e);
          }
        }}
        id={id || name}
        className={inputClassName}
      />

      {error && <small className="text-red-500 text-sm">{error.message}</small>}
    </>
  );
};

export default InputField;

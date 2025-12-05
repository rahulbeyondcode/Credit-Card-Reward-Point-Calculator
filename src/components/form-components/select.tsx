import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

type PropsType<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  register: UseFormRegister<FieldValues>;
  id?: string;
  options: { label: string; value: string }[];
  labelText?: string;
  labelClassName?: string;
  selectClassName?: string;
};

const SelectField = <TFieldValues extends FieldValues>(
  props: PropsType<TFieldValues>
) => {
  const {
    labelText,
    name,
    id,
    labelClassName,
    selectClassName,
    options,
    register,
  } = props;

  return (
    <>
      {labelText ? (
        <label htmlFor={id || name} className={labelClassName}>
          {labelText}
        </label>
      ) : null}

      <select {...register(name)} id={id || name} className={selectClassName}>
        {(options || []).map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectField;

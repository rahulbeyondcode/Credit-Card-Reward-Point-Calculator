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
  options: { label: string; value: string }[];
  labelText?: string;
  labelClassName?: string;
  selectClassName?: string;
};

const SelectField = <T extends FieldValues>(props: PropsType<T>) => {
  const {
    labelText,
    name,
    id,
    labelClassName,
    selectClassName,
    options,
    control,
  } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ control, name });

  return (
    <>
      {labelText ? (
        <label htmlFor={id || name} className={labelClassName}>
          {labelText}
        </label>
      ) : null}

      <select {...field} id={id || name} className={selectClassName}>
        <option value="">-- Choose One --</option>
        {(options || []).map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <small className="text-red-500 text-sm">{error.message}</small>}
    </>
  );
};

export default SelectField;

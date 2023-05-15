import { useController } from "react-hook-form";

export const Input = ({ control, children, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });

  return (
    <div className=" ">
      <label className="text-black ms-2" htmlFor={props.name}>
        {children}
      </label>
      <input className="form-control p-2" {...field} {...props} />
    </div>
  );
};

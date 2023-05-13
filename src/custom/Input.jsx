import { useController } from "react-hook-form";

export const Input = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });

  return (
    <div className="form-outline ">
          <input
            className="form-control p-2"
            {...field}
            {...props}
          />
          <label className="form-label py-2" htmlFor={props.name}>
            {props.textLabel}
          </label>
          <div className="form-notch">
            <div className="form-notch-leading" style={{ width: 10 }} />
            <div className="form-notch-middle" style={{ width: 64 }} />
            <div className="form-notch-trailing" />
          </div>
        </div>
  );
};
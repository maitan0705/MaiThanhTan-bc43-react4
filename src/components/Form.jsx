import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../custom/Input";
import { useDispatch, useSelector } from "react-redux";
import { setInfo } from "../feature/ProductsSlice";

const schema = yup
  .object({
    id: yup.string().required("Please enter your ID").max(4).min(2),
    name: yup.string().required("Please enter your username"),
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email address"),
    phone: yup.string().matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, {
      message: "Please enter the correct phone",
    }),
  })
  .required();
const Form = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
    dispatch(setInfo(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="card w-25 mx-auto p-5 my-3"
    >
      <h2 className="text-center">InFo</h2>
      <div className=" d-grid gap-4 ">
        <div>
          <Input
            name="id"
            placeholder="Enter your id address"
            id="id"
            control={control}
            textLabel="Id"
          ></Input>
          {errors.id && (
            <p className="text-danger m-0 fs-6">{errors.id.message}</p>
          )}
        </div>
        <div>
          <Input
            name="name"
            placeholder="Enter your name address"
            id="name"
            control={control}
            textLabel="Name"
          ></Input>
          {errors.name && (
            <p className="text-danger m-0 fs-6">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Input
            name="email"
            placeholder="Enter your email address"
            id="email"
            control={control}
            textLabel="Email"
          ></Input>
          {errors.email && (
            <p className="text-danger m-0 fs-6">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Input
            name="phone"
            placeholder="Enter your phone address"
            id="phone"
            control={control}
            textLabel="Phone"
          ></Input>
          {errors.phone && (
            <p className="text-danger m-0 fs-6">{errors.phone.message}</p>
          )}
        </div>
        <button className="btn btn-success">Submit</button>
      </div>
    </form>
  );
};

export default Form;

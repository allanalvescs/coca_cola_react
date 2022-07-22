import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

import { FiUser, FiEyeOff, FiEye } from "react-icons/fi";
import { useUser } from "../../Providers/modules/User";

import SignalCoke from "../../images/sig_coca.png";

import "./style.scss";
import { useHistory } from "react-router-dom";

const Login = () => {
  const Schema = Yup.object().shape({
    email: Yup.string().required("Request you Email").email("invalid Email"),
    password: Yup.string().required("Request your password"),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const { singIn } = useUser();

  return (
    <main className="Main_login">
      <div className="container_text-login">
        <div>
          <h2>Enjoy our Cumpom Discount</h2>
          <img src={SignalCoke} alt="botão da coca cola" />
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos quos id
          quam illum facilis! Doloribus quas perspiciatis, ratione quibusdam
          dolorum sequi ullam? Quidem, eos voluptatem.
        </p>

        <Button>Register</Button>
      </div>
      <div className="form_login">
        <h2>Enter in your account</h2>
        <form onSubmit={handleSubmit(singIn)}>
          <Input
            register={register}
            name="email"
            icon={FiUser}
            type="email"
            placeholder="insert your email"
            error={errors.email?.message}
          />

          <Input
            register={register}
            name="password"
            icon={FiEyeOff}
            type="password"
            placeholder="password"
            error={errors.password?.message}
          />

          <Button type="submit">sing in</Button>
        </form>

        <h3>Or</h3>

        <p>You don't have account ?</p>

        <Button onClick={() => history.push("/subscribe")}>Subscribe</Button>
      </div>
    </main>
  );
};

export default Login;

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useUser } from "../../Providers/modules/User";

import "./style.scss";
import UndrawBeer from "../../images/undraw_beer.svg";

import { FiUser, FiAtSign, FiPhoneCall, FiEye } from "react-icons/fi";
import { useState } from "react";

const Subscribe = () => {
  const Schema = yup.object().shape({
    name: yup.string().required("require your name"),
    email: yup.string().required("require your email").email("email invalid"),
    contact: yup.string().required("require your contact"),
    password: yup
      .string()
      .required("require your password")
      .min(6, "accept password only equals or more than 6 caracthers"),
    confirm_password: yup
      .string()
      .required("please confirm your password")
      .oneOf([yup.ref("password"), null], "wrong password"),
    terms: yup.boolean().oneOf([true], "please accept the terms!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });
  const { subscribeNewUser, newUser } = useUser();

  const [isView, setIsView] = useState(true);

  //const viewPassword = () => setIsView(!isView);
  return (
    <main className="Main_Subscribe">
      <div className="Container_infor">
        <h1>
          Please, fill in all inputs below and Subscribe to stay alert in our
          promotions and news.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          beatae obcaecati fugit earum, eius facere ipsam voluptas nam
          repudiandae eos itaque quasi aspernatur et quia blanditiis veritatis
          quidem consequuntur. Hic tempora voluptatibus quas doloribus natus.
        </p>

        <img src={UndrawBeer} alt="undraw beer coke" />
      </div>

      <div className="box_form">
        <form
          onSubmit={handleSubmit(subscribeNewUser)}
          className="Form_subscribe"
        >
          <Input
            register={register}
            name="email"
            type="email"
            placeholder="insert your best email"
            error={errors.email?.message}
            icon={FiAtSign}
          />
          <Input
            register={register}
            name="name"
            type="text"
            placeholder="insert your username"
            error={errors.name?.message}
            icon={FiUser}
          />
          <Input
            register={register}
            name="contact"
            type="tel"
            placeholder="insert your contact"
            error={errors.contact?.message}
            icon={FiPhoneCall}
          />
          <Input
            register={register}
            name="password"
            type="password"
            placeholder="created a password"
            error={errors.password?.message}
            icon={isView ? FiEye : FiUser}
          />
          <Input
            register={register}
            name="confirm_password"
            type="password"
            placeholder="confirm your password"
            error={errors.confirm_password?.message}
            icon={isView ? FiEye : FiUser}
          />
          <Input
            id="input_checkbox"
            register={register}
            name="terms"
            type="checkbox"
            error={errors.terms?.message}
          />

          <Button type="submit">subscribe</Button>
        </form>
      </div>
    </main>
  );
};

export default Subscribe;

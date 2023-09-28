import React from "react";

import LoginImg from "../assets/bookshop-window.jpg";
import Button from "../shared/components/FormElements/Button";
import Input from "../shared/components/FormElements/Input";
import { useForm } from "../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../shared/util/validators";

export default function Login() {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:flex sm:items-center">
        <img
          className="lg:w-full md:w-full object-cover mx-auto"
          src={LoginImg}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto rounded-lg p-8 px-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Login
          </h2>
          <div className="flex flex-col dark:text-white py-2">
            <Input
              element="input"
              id="email"
              type="email"
              label="E-mail"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter a valid email address."
              onInput={inputHandler}
            />
          </div>

          <div className="flex flex-col dark:text-white py-2">
            <Input
              element="input"
              id="password"
              type="password"
              label="password"
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText="Please enter a valid password, at least 6 characters."
              onInput={inputHandler}
            />
          </div>

          <Button type="submit" disabled={!formState.isValid}>
            LOGIN
          </Button>
        </form>
      </div>
    </div>
  );
}

import React from "react";
import Button from '../shared/components/FormElements/Button';
import Input from '../shared/components/FormElements/Input';
import {useForm } from '../shared/hooks/form-hook'
import {
VALIDATOR_EMAIL,
VALIDATOR_MINLENGTH
} from '../shared/util/validators';

export default function Login() {

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      email: formState.inputs.email.value,
      password: formState.inputs.password.value
    });
  }
  return(
    <div> 
      <form onSubmit={handleSubmit}>
        <h2>
          Login
        </h2>
        <div>
          <Input
          element='input'
          id='email'
          type='email'
          label='E-mail'
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
          />
        </div>

        <div>
          <Input 
            element="input"
            id="password"
            type='password'
            label='password'
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
        </div>

        <Button type='submit' disabled={!formState.isValid}>
        LOGIN
        </Button>
      </form>
    </div>
  );
}

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormWrap, Form, Label, FormBtn, Link, Desc } from './LoginForm.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().email().required().trim(),
    password: yup.string().min(5).required().trim(),
  })
  .required();

export const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <FormWrap>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Label>
          <input {...register('email')} placeholder="email@mail.com" />
          <span>Email</span>
          {errors.email && <p>{errors.email.message}</p>}
        </Label>
        <Label>
          <input {...register('password')} placeholder="enter your password" />
          <span>Password</span>
          {errors.password && <p>{errors.password.message}</p>}
        </Label>
        <FormBtn type="submit">Login</FormBtn>
        <Desc>
        Not registered? <Link to="/register">Register</Link>
        </Desc>
      </Form>
    </FormWrap>
  );
};
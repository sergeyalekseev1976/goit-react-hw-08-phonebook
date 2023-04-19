import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operations';
import {
  FormWrap,
  Form,
  Label,
  FormBtn,
  Link,
  Desc,
} from './RegisterForm.styled';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup.string().min(3).required().trim(),
    email: yup.string().email().required().trim(),
    password: yup.string().min(7).required().trim(),
  })
  .required();

export const RegisterForm = () => {
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
    dispatch(registration(data));
    reset();
  };

  return (
    <FormWrap>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Label>
          <input {...register('name')} placeholder="enter username" />
          <span>Username</span>
          {errors.name && <p>{errors.name.message}</p>}
        </Label>
        <Label>
          <input {...register('email')} placeholder="enter email" />
          <span>Email</span>
          {errors.email && <p>{errors.email.message}</p>}
        </Label>
        <Label>
          <input {...register('password')} placeholder="enter password" />
          <span>Password</span>
          {errors.password && <p>{errors.password.message}</p>}
        </Label>
        <FormBtn type="submit">Register</FormBtn>
        <Desc>
        Already registered? <Link to="/login">LogIn</Link>
        </Desc>
      </Form>
    </FormWrap>
  );
};
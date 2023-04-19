import { Text, Link } from './Description.styled';

export const Description = () => {
  return (
    <Text>
      Dear User, in order to use the application, you need to{' '}
      <Link to="/register">Register</Link> or <Link to="/login">LogIn</Link> if
      you already have an account.
    </Text>
  );
};
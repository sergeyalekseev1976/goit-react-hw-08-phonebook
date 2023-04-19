import { Link, Nav } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Nav>
  );
};
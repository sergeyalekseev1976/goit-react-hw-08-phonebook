import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

const styles = {
  container: {
    minHeight: 'calc(100vh - 140px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const Login = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </div>
  );
};

export default Login;
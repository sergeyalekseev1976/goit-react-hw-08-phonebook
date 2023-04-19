import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Header, Container, Logo } from './AppBar.styled.jsx';
import { FcContacts } from 'react-icons/fc';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <Logo>
          <FcContacts />
          PhoneBook
        </Logo>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
};
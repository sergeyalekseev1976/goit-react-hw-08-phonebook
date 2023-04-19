import { Description } from 'components/Description/Description';
import { Helmet } from 'react-helmet';
import { MdContactPhone } from 'react-icons/md';

const styles = {
  container: {
    minHeight: 'calc(100vh - 140px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '40px',
  },
  title: {
    fontWeight: 500,
    fontSize: 40,
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <h1 style={styles.title}>
        Welcome to Phonebook
      </h1>
      <MdContactPhone size="250" color="#0afc0a" />
      <Description />
    </div>
  );
};

export default Home;
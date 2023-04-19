import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Modal } from 'components/Modal/Modal';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Helmet } from 'react-helmet';
import { ContactsBar } from 'components/ContactsBar/ContactsBar';
import { Loader } from 'components/Loader/Loader';

const styles = {
  container: {
    minHeight: 'calc(100vh - 180px)',
  },
};

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevState => !prevState);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <Filter />

      <ContactsBar onOpen={toggleModal} />
      {isLoading && !error && <Loader />}
      <ContactList />
      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </div>
  );
};

export default Contacts;
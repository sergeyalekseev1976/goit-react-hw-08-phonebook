import { Wrapper, AddBtn, Info } from './ContactsBar.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactsBar = ({ onOpen }) => {
  const contacts = useSelector(selectContacts);

  return (
    <Wrapper>
      <Info>All: {contacts.length}</Info>
      <AddBtn onClick={onOpen}>Add +</AddBtn>
    </Wrapper>
  );
};
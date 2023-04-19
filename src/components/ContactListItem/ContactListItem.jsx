import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import {
  Item,
  ContactName,
  ContactNumber,
  ContactBtn,
  Avatar,
  TextWrapper,
} from './ContactListItem.styled';
import {
  BsPersonFill,
  BsXLg,
  BsFillTelephoneFill,
  BsFillPencilFill,
} from 'react-icons/bs';
import { EditForm } from 'components/EditForm/EditForm';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(prevState => !prevState);

  return (
    <>
      <Item>
        <Avatar>{name.slice(0, 1).toUpperCase()}</Avatar>
        <TextWrapper>
          <ContactName>
            <BsPersonFill />
            {name}
          </ContactName>
          <ContactNumber>
            <BsFillTelephoneFill size="14" />
            {number.replace(/\d{2}(?=.)/g, '$&-')}
          </ContactNumber>
        </TextWrapper>
        <ContactBtn onClick={toggleModal}>
          <BsFillPencilFill />
        </ContactBtn>
        <ContactBtn onClick={handleDelete}>
          <BsXLg />
        </ContactBtn>
      </Item>
      {showModal && (
        <Modal onClose={toggleModal}>
          <EditForm onClose={toggleModal} id={id} name={name} number={number} />
        </Modal>
      )}
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

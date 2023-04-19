import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';
import { Form, Label, FormBtn, FormWrap } from './ContactForm.styled';
import { BsPersonPlusFill } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
// import PropTypes from 'prop-types';

const schema = yup
  .object({
    name: yup
      .string()
      .min(3)
      .max(12)
      .required()
      .trim()
      .matches(
        /^[a-zA-Z]+(([' -][a-zA-Z])?[a-zA-Z]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      ),
    number: yup
      .string()
      .min(6)
      .max(10)
      .required()
      .trim()
      .matches(/^\d+$/, 'Number must be only digits'),
  })
  .required();

export const ContactForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    if (
      contacts.find(
        option => option.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return toast.error(`${data.name} is already in contacts`);
    }
    dispatch(addContact(data));
    reset();
    onClose();
  };

  return (
    <FormWrap>
      <h2>Contact</h2>
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Label>
          <input {...register('name')} placeholder="Enter contact name" />
          <span>Name</span>
          {errors.name && <p>{errors.name.message}</p>}
        </Label>
        <Label>
          <input {...register('number')} placeholder="Enter contact number" />
          <span>Number</span>
          {errors.number && <p>{errors.number.message}</p>}
        </Label>
        <FormBtn type="submit">
          <BsPersonPlusFill />
          &nbsp; Add contact
        </FormBtn>
      </Form>
    </FormWrap>
  );
};

// ContactForm.propTypes = {
//   onClose: PropTypes.func,
// };
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/operations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form, Label, FormBtn, FormWrap } from './EditForm.styled';
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
        /^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$/,
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

export const EditForm = ({ id, name, number, onClose }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name,
      number,
    },
  });

  const onSubmit = data => {
    if (name === data.name && number === data.number) {
      return toast.error(`contact not changed`);
    }
    dispatch(updateContact({ id, ...data }));
    onClose();
  };

  return (
    <FormWrap>
      <h2>Edit contact</h2>
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
        <FormBtn type="submit">Save</FormBtn>
      </Form>
    </FormWrap>
  );
};

// EditForm.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onClose: PropTypes.func,
// };
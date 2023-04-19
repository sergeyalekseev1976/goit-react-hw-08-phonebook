import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Label>
      <span>Find contacts by name</span>
      <Input
        type="text"
        name="filter"
        placeholder="search"
        onChange={onChangeFilter}
      />
    </Label>
  );
};

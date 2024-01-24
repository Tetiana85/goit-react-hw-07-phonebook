import { FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux-folder/selectors';
import { setFilter } from '../../redux-folder/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleUpdateFilter = evt => {
    const value = evt.target.value;
    dispatch(setFilter(value));
  };

  return (
    <>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={handleUpdateFilter}
        required
      />
    </>
  );
};

export default Filter;

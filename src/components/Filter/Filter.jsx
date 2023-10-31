import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsSlice';
import { selectError, selectFilter } from 'redux/contacts/selectors';
import css from './Filter.module.css'

export const Filter = () => {
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
    <div>
      {error && 'something went wrong'}
      <h3 className={css.title3}>Find contacts by name</h3>
      <input className={css.input}
        type="filter"
        name="filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

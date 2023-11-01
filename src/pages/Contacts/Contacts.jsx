import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import css from './Contacts.module.css';
import { selectError } from 'redux/contacts/selectors';

const Contacts = () => {
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      {error && 'something went wrong'}
      <div className={css.div}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.title2}>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </>
  );
};
export default Contacts;

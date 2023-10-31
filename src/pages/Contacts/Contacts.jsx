import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import css from './Contacts.module.css';

const Contacts = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <div className={css.div}>
          <h1 className={css.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={css.title2}>Contacts</h2>
          <Filter />
          <ContactsList />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};
export default Contacts;

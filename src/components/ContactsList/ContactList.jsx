import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import {
  selectItems,
  selectFilter,
  selectError,
} from 'redux/contacts/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = () => {
  const error = useSelector(selectError);
  const contacts = useSelector(selectItems);
  const filter = useSelector(selectFilter);

  const filteredContacts = useMemo(() => {
    if (filter === '') return contacts;

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [contacts, filter]);

  return (
    <div>
      {error && 'something went wrong'}
      <ul className={css.list}>
        {filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
};

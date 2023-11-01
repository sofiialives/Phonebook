import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { LoadingDelete } from '../ContactsList/LoadingDelete';
import css from './ContactItem.module.css';

export const ContactItem = ({ contact }) => {
  const [isDelete, setIsDelete] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = id => {
    setIsDelete(true);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => setIsDelete(false));
  };

  return (
    <li>
      <span>
        {contact.name}: {contact.number || contact.phone}
      </span>
      <button
        onClick={() => handleDelete(contact.id)}
        className={css.buttonFilter}
      >
        {isDelete ? <LoadingDelete /> : '\u2716'}
      </button>
    </li>
  );
};

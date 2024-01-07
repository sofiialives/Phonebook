import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from 'redux/contacts/operations';
import { LoadingDelete } from '../ContactsList/LoadingDelete';
import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, id, phone }) => {
  const [contactName, setContactName] = useState(name);
  const [contactNumber, setContactNumber] = useState(number);
  const [isDelete, setIsDelete] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = id => {
    setIsDelete(true);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => setIsDelete(false));
  };

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  const updateContacts = e => {
    e.preventDefault();
    const form = e.target;
    const newContact = {
      name: contactName,
      number: contactNumber,
      contactId: id,
    };
    form.reset();

    dispatch(updateContact(newContact));
    toggleShow();
  };

  const handleChange = e => {
    if (e.target.name === 'name') setContactName(e.target.value);
    if (e.target.name === 'number') setContactNumber(e.target.value);
  };

  return (
    <li>
      {isShow ? (
        <form onSubmit={updateContacts}>
          <input
            type="text"
            name="name"
            placeholder="Change the name"
            value={contactName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="number"
            placeholder="Change the number"
            value={contactNumber}
            onChange={handleChange}
          />
          <button type="submit" className={css.saveBtn}>💾</button>
        </form>
      ) : (
        <>
          <span className={css.input}>
            {name}: {number || phone}
          </span>
        </>
      )}
      <section className={css.buttons}>
        <button
          type="button"
          onClick={() => toggleShow()}
          className={css.buttonEdit}
        >
          {isDelete ? <LoadingDelete /> : '\u270e'}
        </button>
        <button
          type="button"
          onClick={() => handleDelete(id)}
          className={css.buttonFilter}
        >
          {isDelete ? <LoadingDelete /> : '\u2716'}
        </button>
      </section>
    </li>
  );
};

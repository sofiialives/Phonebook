import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectError, selectItems } from 'redux/contacts/selectors';
import { useState } from 'react';

export function ContactForm() {
  const error = useSelector(selectError);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectItems);
  const dispatch = useDispatch();

  const id = nanoid();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const addContacts = ({ name, number }) => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContacts({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <>
      {error && 'something went wrong'}
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css.inputLabel}>
          <label htmlFor={id} className={css.label}>
            Name
          </label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+$"
            minLength="3"
            maxLength="16"
            id={id}
            value={name}
            onChange={handleChange}
            className={css.inputName}
            required
          />
        </div>
        <div className={css.inputLabel}>
          <label htmlFor={id} className={css.label}>
            Number
          </label>
          <input
            type="tel"
            name="number"
            id={id}
            value={number}
            onChange={handleChange}
            className={css.inputName}
            required
          />
        </div>
        <button type="submit" className={css.buttonContacts}>
          +
        </button>
      </form>
    </>
  );
}

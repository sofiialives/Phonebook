import { ContactForm } from "components/ContactForm/ContactForm"
import { ContactsList } from "components/ContactsList/ContactList"
import { Filter } from "components/Filter/Filter"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";

export const Contacts = () =>{
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
    return(
        <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    )
}
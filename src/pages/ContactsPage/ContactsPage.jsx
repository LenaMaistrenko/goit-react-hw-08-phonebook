import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addContact, fetchContacts } from '../../redux/contactsOperations';
import css from './ContactsPage.module.css';
import { selectIsLoggedIn } from 'redux/UserSlice/selectors';

import {
  selectContactError,
  selectContactStatus,
  selectContacts,
} from 'redux/ContactsSlice/selectors';
import { Loader } from 'components/Loader/Loader';
import { getContactsRequest } from 'redux/ContactsSlice/ContactSlice';
import WithAuthRedirect from 'HOC/WithAuthRedirect';

function ContactsPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const contacts = useSelector(selectContacts);
  const status = useSelector(selectContactStatus);
  const error = useSelector(selectContactError);

  const handleSubmit = formData => {
    dispatch(addContact(formData));
  };

  useEffect(() => {
    dispatch(getContactsRequest());
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.contactspagetitle}>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      {status === 'pending' && <Loader />}
      <h2 className={css.contactspagetitle}>Contacts</h2>
      {contacts?.length > 0 && <Filter />}
      {contacts?.length > 0 && <ContactList />}

      {/* <Filter />
      <ContactList /> */}
    </div>
  );
}
export default WithAuthRedirect(ContactsPage, '/login');

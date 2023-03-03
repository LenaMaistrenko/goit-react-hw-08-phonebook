import css from '../ContactList/ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { useEffect } from 'react';
import {
  deleteContactRequest,
  getContactsRequest,
} from 'redux/ContactsSlice/ContactSlice';
import { selectContacts } from 'redux/ContactsSlice/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsRequest());
  }, [dispatch]);
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

  const filterContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filterContacts?.map(item => (
        <li className={css.contactItem} key={item.id}>
          {item.name}
          <span>{item.number}</span>
          <button
            id={item.id}
            onClick={() => dispatch(deleteContactRequest(item.id))}
            className={css.btndelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

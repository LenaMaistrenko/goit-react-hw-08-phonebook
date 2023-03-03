import { useRef, useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contactsOperations';
import PropTypes from 'prop-types';

import { selectStatus } from 'redux/UserSlice/selectors';
import { addContactRequest } from 'redux/ContactsSlice/ContactSlice';
import { selectContacts } from 'redux/ContactsSlice/selectors';

export function ContactForm({ onSubmit }) {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const status = useSelector(selectStatus);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      name: nameInputRef.current.value,
      number: phoneInputRef.current.value,
    };
    dispatch(addContactRequest(formData));
    console.log('formData', formData);
    // onSubmit(formData);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactform}>
      {/* <h2>Add contact</h2> */}
      <label className={css.formlabel}>
        Name :
        <input
          className={css.forminput}
          type="text"
          name="name"
          placeholder={'Input name'}
          ref={nameInputRef}
          required
        />
      </label>
      <label className={css.formlabel}>
        Number :
        <input
          className={css.forminput}
          type="tel"
          name="number"
          placeholder={'Input phone number'}
          ref={phoneInputRef}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.addbtn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

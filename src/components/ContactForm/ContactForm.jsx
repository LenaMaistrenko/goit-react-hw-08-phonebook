import { useRef } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { addContactRequest } from 'redux/ContactsSlice/ContactSlice';

export function ContactForm({ onSubmit }) {
  const dispatch = useDispatch();
  const nameInputRef = useRef();
  const phoneInputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      name: nameInputRef.current.value,
      number: phoneInputRef.current.value,
    };
    dispatch(addContactRequest(formData));
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.contactform}>
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

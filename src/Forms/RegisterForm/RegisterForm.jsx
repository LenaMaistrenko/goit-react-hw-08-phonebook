import { useRef } from 'react';
import css from './RegisterForm.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectStatus } from 'redux/UserSlice/selectors';
import { Loader } from 'components/Loader/Loader';

function RegisterForm({ onSubmit }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const status = useSelector(selectStatus);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          className={css.forminput}
          type="text"
          name="name"
          placeholder={'Input name'}
          ref={nameInputRef}
          minLength={2}
          maxLength={30}
          required
        />
      </label>
      <label className={css.label}>
        Email
        <input
          className={css.forminput}
          type="email"
          name="email"
          placeholder={'Input email'}
          ref={emailInputRef}
          required
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.forminput}
          type="password"
          name="password"
          placeholder={'Input password'}
          ref={passwordInputRef}
          minLength={7}
          maxLength={30}
          required
        />
      </label>
      <button
        type="submit"
        disabled={status === 'pending'}
        className={css.formbtn}
      >
        {status === 'pending' && <Loader />}
        Register
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;

import { useRef } from 'react';
import css from './LoginForm.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectStatus } from 'redux/UserSlice/selectors';
import { Loader } from 'components/Loader/Loader';

function LoginForm({ onSubmit }) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const status = useSelector(selectStatus);

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input
          type="email"
          name="email"
          placeholder={'Input email'}
          ref={emailInputRef}
        />
      </label>
      <label className={css.label}>
        Password
        <input
          type="password"
          name="password"
          placeholder={'Input password'}
          ref={passwordInputRef}
        />
      </label>
      <button
        className={css.formbtn}
        type="submit"
        disabled={status === 'pending'}
      >
        {status === 'pending' && <Loader />} Log In
      </button>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;

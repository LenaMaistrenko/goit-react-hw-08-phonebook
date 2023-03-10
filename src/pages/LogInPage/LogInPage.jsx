import LoginForm from 'Forms/LoginForm/LoginForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginRequest } from 'redux/UserSlice/UserSlice';
import { selectIsLoggedIn } from 'redux/UserSlice/selectors';
import css from '../../components/Layout/Layout.module.css';

export default function LogInPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) return;
    navigate('/contacts');
  }, [isLoggedIn, navigate]);
  const handleLogIn = formData => {
    dispatch(loginRequest(formData));
    console.log(formData);
  };
  return (
    <>
      <section>
        <div>
          <h1 className={css.navtext}>LogInPage</h1>
          <LoginForm onSubmit={handleLogIn} />
        </div>
      </section>
    </>
  );
}

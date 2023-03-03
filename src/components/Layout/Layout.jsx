import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { selectIsLoggedIn, selectUserData } from 'redux/UserSlice/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  getCurrentUserRequest,
  logOutRequest,
} from 'redux/UserSlice/UserSlice';

export default function Layout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    dispatch(getCurrentUserRequest());
  }, [dispatch]);
  return (
    <>
      {' '}
      <header>
        <div>
          <nav>
            {' '}
            {isLoggedIn ? (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="contacts">Contacts</NavLink>
                <span>Hello, {userData.name}</span>
                <button onClick={handleLogOut}>Logout</button>
              </>
            ) : (
              <>
                <NavLink to={'/'}>Home</NavLink>
                <div className={css.navreg}>
                  <NavLink to="login">Login</NavLink>
                  <NavLink to="register">Register</NavLink>
                </div>
              </>
            )}
          </nav>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

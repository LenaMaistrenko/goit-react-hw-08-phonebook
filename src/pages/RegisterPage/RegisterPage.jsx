import RegisterForm from 'Forms/RegisterForm/RegisterForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerRequest } from 'redux/UserSlice/UserSlice';
import { selectIsLoggedIn } from 'redux/UserSlice/selectors';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  console.log('navigate', navigate);
  useEffect(() => {
    if (!isLoggedIn) return;
    navigate('/contacts');
  }, [isLoggedIn, navigate]);
  const handleRegister = formData => {
    dispatch(registerRequest(formData));
    console.log(formData);
  };

  return (
    <>
      <section>
        <div>
          <h1>RegisterPage</h1>
          <RegisterForm onSubmit={handleRegister} />
        </div>
      </section>
    </>
  );
}

import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { Suspense, lazy } from 'react';

export function App() {
  const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
  const LogInPage = lazy(() => import('../pages/LogInPage/LogInPage'));
  const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
  const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

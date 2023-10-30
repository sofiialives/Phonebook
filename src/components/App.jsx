import { Contacts } from 'pages/Contacts/Contacts';
import { Layout } from 'pages/Layout/Layout';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Welcome } from 'pages/Welcome/Welcome';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index path="/" element={<Welcome />} />
        <Route
          path="/register"
          element={
            <Suspense>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/contacts"
          element={
            <Suspense>
              <Contacts />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

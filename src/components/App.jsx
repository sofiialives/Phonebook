import { Contacts } from 'pages/Contacts/Contacts';
import { Layout } from 'pages/Layout/Layout';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<Layout />} />
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

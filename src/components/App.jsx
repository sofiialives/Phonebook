import { Layout } from 'pages/Layout/Layout';
import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';


import { Loading } from './Loading';
const Welcome = lazy(() => import('pages/Welcome/Welcome'));
const Register = lazy(() => import('pages/Register/Register'));
const Login= lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <AppBar />
        <Suspense fallback={<Loading/>}>
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route index path="/" element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}

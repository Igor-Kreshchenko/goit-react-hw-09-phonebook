import React, { Suspense, lazy, useEffect } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { Container } from '@material-ui/core';
import Loader from './components/Loader';
import AppBar from './components/AppBar';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(authOperations.getCurrentUser()), [dispatch]);

  return (
    <Container style={{ paddingTop: '100px' }}>
      <AppBar />

      <Suspense fallback={<Loader />}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;

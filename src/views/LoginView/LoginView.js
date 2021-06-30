import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { TextField, Button } from '@material-ui/core';
import styles from './LoginView.module.css';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.formBox}>
      <h1 className={styles.title}>Sign In</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="on">
        <TextField
          label="Email"
          variant="filled"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          margin="dense"
          fullWidth
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          margin="dense"
          fullWidth
        />

        <Button
          className={styles.button}
          variant="contained"
          color="primary"
          type="submit"
          size="large"
          fullWidth
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginView;

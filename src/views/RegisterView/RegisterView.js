import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { TextField, Button } from '@material-ui/core';
import styles from './RegisterView.module.css';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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

    dispatch(authOperations.register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.formBox}>
      <h1 className={styles.title}>Sign Up</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <TextField
          label="Name"
          variant="filled"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          margin="dense"
          fullWidth
        />
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
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default RegisterView;

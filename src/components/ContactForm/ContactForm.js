import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { addContact } from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = useCallback(event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля ${name} не обрабатывается`);
    }
  }, []);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      const names = contacts.map(contact => contact.name);

      names.includes(name)
        ? alert(`${name} is already in contacts`)
        : dispatch(addContact({ name, number }));

      resetForm();
    },
    [dispatch, contacts, name, number],
  );

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="filled"
        type="text"
        name="name"
        required
        value={name}
        onChange={handleChange}
        margin="dense"
        fullWidth
      />
      <TextField
        label="Number"
        variant="filled"
        type="tel"
        name="number"
        required
        value={number}
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
        Add
      </Button>
    </form>
  );
};

export default ContactForm;

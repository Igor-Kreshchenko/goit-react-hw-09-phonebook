import React, { useCallback } from 'react';
import { IconButton } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { deleteContact } from '../../../redux/contacts/contacts-operations';
import { useDispatch } from 'react-redux';
import styles from '../ContactList.module.css';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = useCallback(() => dispatch(deleteContact(id)), [
    dispatch,
    id,
  ]);

  return (
    <li className={styles.item}>
      <p className={styles.name}>{name}</p>
      <p className={styles.number}>{number}</p>
      <IconButton
        aria-label="delete"
        color="primary"
        className={styles.button}
        type="button"
        onClick={onDeleteContact}
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </li>
  );
};

export default ContactItem;

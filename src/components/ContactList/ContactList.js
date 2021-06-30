import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operations';
import {
  getFilteredContacts,
  getIsLoading,
  getError,
} from '../../redux/contacts/contacts-selectors';
import ContactItem from './ContactItem';
import Loader from '../Loader';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);
  const isLoadingContacts = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <>
      {isLoadingContacts && <Loader />}
      {error && <h2>404 Not Found</h2>}

      <ul className={styles.list}>
        {contacts.map(contact => {
          const { id, name, number } = contact;

          return <ContactItem key={id} name={name} number={number} id={id} />;
        })}
      </ul>
    </>
  );
};

export default ContactList;

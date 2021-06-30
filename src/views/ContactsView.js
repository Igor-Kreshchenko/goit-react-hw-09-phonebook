import React from 'react';
import styles from '../App.module.css';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';

const ContactsView = () => {
  return (
    <div className={styles.wrapper}>
      <Section title="Add new contact">
        <ContactForm />
      </Section>

      <Section title="All contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};

export default ContactsView;

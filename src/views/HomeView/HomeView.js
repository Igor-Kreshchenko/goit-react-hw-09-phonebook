import React from 'react';
import logoImg from '../../images/phonebook-logo.png';
import styles from './HomeView.module.css';

const HomeView = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Phonebook</h1>
    <img className={styles.logo} src={logoImg} alt="" />
  </div>
);

export default HomeView;

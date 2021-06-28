import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import { deleteContact } from '../../../redux/contacts/contacts-operations';
import { connect } from 'react-redux';
import styles from '../ContactList.module.css';

const ContactItem = ({ id, name, number, onClick }) => {
  return (
    <li className={styles.item}>
      <p className={styles.name}>{name}</p>
      <p className={styles.number}>{number}</p>
      <IconButton
        aria-label="delete"
        color="primary"
        className={styles.button}
        type="button"
        onClick={() => onClick(id)}
      >
        <DeleteOutlinedIcon />
      </IconButton>
    </li>
  );
};

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);

ContactItem.propTypes = {
  onClick: PropTypes.func.isRequired,
};

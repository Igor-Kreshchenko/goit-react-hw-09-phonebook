import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>Welcome, {name}</span>
    <Button
      style={{ color: '#fff', borderColor: '#fff' }}
      variant="outlined"
      type="button"
      onClick={onLogout}
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = { onLogout: authOperations.logOut };

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

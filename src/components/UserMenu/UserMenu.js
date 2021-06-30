import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';
import defaultAvatar from './default-avatar.png';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  const onLogOut = useCallback(() => dispatch(authOperations.logOut()), [
    dispatch,
  ]);

  return (
    <div className={styles.container}>
      <img src={defaultAvatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <Button
        style={{ color: '#fff', borderColor: '#fff' }}
        variant="outlined"
        type="button"
        onClick={onLogOut}
      >
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;

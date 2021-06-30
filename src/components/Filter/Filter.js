import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getFilter);
  const onChange = useCallback(
    e => {
      const value = e.target.value;
      dispatch(filterContacts(value));
    },
    [dispatch],
  );

  return (
    <TextField
      label="Search contact by name"
      variant="filled"
      type="text"
      value={value}
      onChange={onChange}
      margin="dense"
      fullWidth
    />
  );
};

export default Filter;

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = ({ value, onChange }) => {
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

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: ({ target: { value } }) => dispatch(filterContacts(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

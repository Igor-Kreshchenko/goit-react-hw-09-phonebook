import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { TextField, Button } from '@material-ui/core';
import styles from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.formBox}>
        <h1 className={styles.title}>Sign In</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="on"
        >
          <TextField
            label="Email"
            variant="filled"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            margin="dense"
            fullWidth
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
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
            Sign In
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);

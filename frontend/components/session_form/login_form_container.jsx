import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => ({
  errors: errors.session,
  formHeader: "Log in and let's get going",
  formType: 'Log In',
  form: {
    email: '',
    password: '',
  },
  alternativeFormText: "Don't have an account?",
  navLink: <Link to="/signup">Sign up for free</Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user)),
  login: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

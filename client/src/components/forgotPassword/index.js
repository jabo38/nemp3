import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import RenderRecaptcha from 'components/renderRecaptcha';
import axios from 'axios';

class ForgotPassword extends Component {
  state = {
    response: null
  };

  onSubmit = values =>
    new Promise(async resolve => {
      try {
        const res = await axios.post('/api/auth/reset', values);
        this.setState({ response: res.data });
      } catch (e) {
        this.setState({ response: e.response.data });
      }
      const captcha = this.captcha;
      this.props.reset();
      captcha.getRenderedComponent().reset();
      resolve();
    });

  required = value => (value ? undefined : 'Please enter a value.');

  renderField = field => {
    const {
      hint,
      icon,
      id,
      input,
      label,
      meta: { touched, error },
      name,
      placeholder,
      required,
      type
    } = field;

    return (
      <div className="form-group">
        <label htmlFor={id}>
          <FontAwesome name={icon} className="red mr-2" />
          {label}
        </label>
        <input
          {...input}
          className="form-control"
          name={name}
          placeholder={placeholder}
          required={required}
          type={type}
        />
        {error && (
          <div className="invalid-feedback">{touched && error && error}</div>
        )}
        {hint && <small className="form-text text-muted">{hint}</small>}
      </div>
    );
  };

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const { response } = this.state;
    const className =
      response && response.error ? 'alert-danger' : 'alert-success';

    return (
      <main className="container">
        <div className="row">
          <div className="col py-3 mb-4">
            <h2 className="text-center mt-4">Reset Password</h2>
            <p className="text-center">
              Please enter your account email address below and submit to
              receive a password reset link, valid for an hour.
            </p>
            <form
              className="form-row mt-5"
              onSubmit={handleSubmit(this.onSubmit)}
            >
              <div className="col-md-6 mx-auto">
                <Field
                  component={this.renderField}
                  icon="envelope-o"
                  id="email"
                  label="Email Address:"
                  name="email"
                  placeholder="Email Address"
                  required
                  type="email"
                  validate={this.required}
                />
                {response && (
                  <div
                    className={`alert ${className} text-center`}
                    role="alert"
                  >
                    {response.success && (
                      <FontAwesome name="thumbs-up" className="mr-2" />
                    )}
                    {response.error && (
                      <FontAwesome name="bomb" className="mr-2" />
                    )}
                    {response.success || response.error}
                  </div>
                )}
                <Field
                  classNames="justify-content-end"
                  component={RenderRecaptcha}
                  forwardRef
                  name="recaptcha"
                  ref={el => {
                    this.captcha = el;
                  }}
                  validate={this.required}
                />
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-outline-primary my-3"
                    disabled={invalid || pristine || submitting}
                    type="submit"
                  >
                    Send Reset Email
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

ForgotPassword.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  reset: PropTypes.func,
  submitting: PropTypes.bool
};

export default reduxForm({
  form: 'forgotPasswordForm'
})(ForgotPassword);

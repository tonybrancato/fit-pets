/*eslint-disable*/

import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';

export class LoginForm extends React.Component {
onSubmit(values) {
return this.props.dispatch(login(values.username, values.password));
}

render() {
let error;
if (this.props.error) {
error = (
  <div className="form-error" aria-live="polite">
    {this.props.error}
  </div>
);
}
return (
  <form
    className="login-form"
    onSubmit={this.props.handleSubmit(values =>
      this.onSubmit(values),
    )}
  >
    {error}
    <Field
      component={Input}
      placeholder="Username"
      type="text"
      name="username"
      id="usenpm strname"
      validate={[required, nonEmpty]}
    />
    <Field
      component={Input}
      placeholder="Password"
      type="password"
      name="password"
      id="password"
      validate={[required, nonEmpty]}
    />
    <button disabled={this.props.pristine || this.props.submitting}>
                    Log in
    </button>
  </form>
);
}
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
  })(LoginForm);

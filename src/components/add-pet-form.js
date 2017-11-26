import React from 'react';
import {Field, reduxForm, /*focus*/} from 'redux-form';
import renderDatePicker from './datepicker';
// import {registerUser} from '../actions/users';
// import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, isTrimmed} from '../validators';
import './add-pet-form.css';

export class AddPetForm extends React.Component {
 

    render() {
        return (
            <form
                className="add-pet-form"
               /* onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}*/>
                <div>
                    <label>What kind of pet do you want to add?</label>
                    <div>
                        <label><Field 
                            component={Input} 
                            type="radio" 
                            name="petType" 
                            value="0"
                        />Dog</label>
                        <label><Field 
                            component={Input} 
                            type="radio" 
                            name="petType" 
                            value="1"
                        />Cat</label>
                    </div>
                </div>
                <Field
                    component={Input}
                    placeholder="Pet Name"
                    type="text"
                    name="petName"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <div>
                    <label>Mixed or Purebred?</label>
                    <div>
                        <label><Field 
                            component={Input} 
                            type="radio" 
                            name="breedType" 
                            value="0"
                        />Mixed</label>
                        <label><Field 
                            component={Input} 
                            type="radio" 
                            name="breedType" 
                            value="1"
                        />Purebred</label>
                    </div>
                </div> 
                <label>Birthday<Field
                    component={renderDatePicker}
                    name="birthday"
                    value="0"
                /></label>
                <label>Weight<Field
                    component={Input}
                    name="weight"
                    /><span>Pounds</span></label>
                {/* <Field
                    component={Input}
                    placeholder="Username"
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Field
                    component={Input}
                    placeholder="Password"
                    type="password"
                    name="password"
                    validate={[required, length({min: 10, max: 72}), isTrimmed]}
                />
                <Field
                    component={Input}
                    placeholder="Verify Password"
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matches('password')]}
                />
                <button
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </button> */}
            </form>
        );
    }
}

export default reduxForm({
    form: 'add-pet'
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('add-pet', Object.keys(errors)[0]))
})(AddPetForm);

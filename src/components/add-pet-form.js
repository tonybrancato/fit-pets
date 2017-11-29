import React from 'react';
import {Field, reduxForm, /*focus*/} from 'redux-form';
import renderDatePicker from './datepicker';
// import {registerUser} from '../actions/users';
// import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, isTrimmed, length} from '../validators';
import './add-pet-form.css';

export class AddPetForm extends React.Component {
 

	render() {
		return (
			<form
				className="add-pet-form"
				/* onSubmit={this.props.handleSubmit(values =>
						this.onSubmit(values)
				)}*/>
				<div className="form-section">
					<p>What kind of pet do you want to add?</p>
					<div className="radio-section">
						
						<label htmlFor="petType">
						<Field 
								className="radio"
								component={Input} 
								type="radio" 
								name="petType" 
								value="0"
						/>Dog</label>
						<label htmlFor="petType">
						<Field 
								className="radio"
								component={Input} 
								type="radio" 
								name="petType" 
								value="1"
						/>Cat</label>
					</div>
				</div>
				<div className="form-section">
					<label>Sex?</label>
					<div className="radio-section">
						<label><Field 
								component={Input} 
								type="radio" 
								name="sex" 
								value="0"
						/>Male</label>
						<label><Field 
								component={Input} 
								type="radio" 
								name="sex" 
								value="1"
						/>Female</label>
					</div>
				</div>  

				<div className="form-section">
						<label htmlFor="petName"><h3>Pet Name</h3></label>     
						<div>         
							<Field
									component={Input}
									placeholder="Pet Name"
									type="text"
									name="petName"
									validate={[required, nonEmpty, isTrimmed]}
							/>
						</div>
				</div>
				<div className="form-section">
					<label htmlFor="birthday">Birthday</label>
					<div>
						<Field
								type="text"
								component={renderDatePicker}
								name="birthday"
								value="0"
						/>
					</div>
				</div>
				<div className="form-section">
					<label>Weight</label>
				<div>
					<Field
							type="number"
							placeholder="equivalent to pounds"
							component={Input}
							name="weight"
							validate={[required, nonEmpty, isTrimmed, length({min: 1, max: 3})]}
						/>
					</div>
				</div>
				<button 
					type="submit"
					disabled={this.props.pristine || this.props.submitting}>
					ADD PET
				</button>				
			</form>
		);
	}
}

export default reduxForm({
    form: 'add-pet'
    // onSubmitFail: (errors, dispatch) =>
    //     dispatch(focus('add-pet', Object.keys(errors)[0]))
})(AddPetForm);

import React from 'react';
import Formsy from 'formsy-react';
import TextInput from 'components/TextInput';

export class PersonAdd extends React.Component {
  constructor(){
    super();
    this.defaultValidation = {
      isDefaultRequiredValue: 'This feild is required',
      isNumeric: 'Should only contain numbers',
      isLength: 'Should only contain 11 digits'
    }
    this.state = {
      canSubmit: false,
      form: {}
    }
  }
  enableButton() {
    this.setState({
      canSubmit: true
    });
  }
  disableButton() {
    this.setState({
      canSubmit: false
    });
  }
  submit(model) {
    let person = {
      firstName: model.firstName,
      lastName: model.lastName,
      phone: model.phone
    };
    
    if (this.props.edit){
      person.id = parseInt(this.props.id);
      this.props.updatePersonAsync(this.props.id, person);
    } else{
      this.props.addPersonAsync(person); 
    }
  }
  assignDataToFrom(){
    if(this.props.edit){
      this.state.form = this.props.person
    }
    return this.state.form;
  }
  render() {
    this.assignDataToFrom();
    
    let addOrEdit = () =>{
      if(this.props.edit){
        return (<h3>Edit this person</h3>);  
      }
      else{
        return (<h3>Add a new person</h3>);
      }
    }
    
    return (
      <Formsy.Form onValidSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
        {addOrEdit()}
        <div>
          <label htmlFor="firstName">First Name</label>
          <TextInput 
              name="firstName" 
              id="firstName"
              value={this.state.form.firstName}
              required 
              validationErrors={this.defaultValidation}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <TextInput 
              name="lastName" 
              id="lastName"
              value={this.state.form.lastName}
              required 
              validationErrors={this.defaultValidation}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number</label>
          <TextInput 
              name="phone" 
              id="phone"
              value={this.state.form.phone}
              required 
              validations="isNumeric,isLength:11"
              validationErrors={this.defaultValidation}
          />
        </div>
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
       </Formsy.Form>
    )
  }
}
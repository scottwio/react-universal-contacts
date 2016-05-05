import React from 'react';
import {Decorator as FormsyElement} from 'formsy-react';

@FormsyElement()
class TextInput extends React.Component {
  render() {
    let dispayErrors = () => {
      if(!this.props.isPristine()){
        return (<div>{this.props.getErrorMessage()}</div>) 
      }
    }

    return (
    <div>
      <input name={this.props.name} value={this.props.getValue()} onChange={(e) => this.props.setValue(e.target.value)}/>
      {dispayErrors()}
    </div>
    );
  }
};
export default TextInput;
import React, { Component } from "react";
import { _ } from "underscore";
import {surveySchema} from '../../lib/schema';

class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (e) => {
      surveySchema[e.currentTarget.name] = e.currentTarget.value;
  }
  render() {
    const { formData } = this.props;

    return (
      <>
        {_.map(formData, (field, idx) => (
          <div className={`${field.align} ${field.class}`} key={idx}>
            <input
              type={field.type}
              name={field.name}
              defaultChecked={field.selected}
              id={field.id}
              value={field.value}
              onChange={field.handleChange || this.handleChange}
            />
            <label> {field.labelName} </label>
          </div>
        ))}
      </>
    );
  }
}
export default RadioButton;

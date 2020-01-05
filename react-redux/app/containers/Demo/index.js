/*
 * FeaturePage
 *
 * List all the features
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class DemoPage extends Component {
  renderInput(formProps) {
    // return (
    //   <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   />
    // );
    return (
      <div>
        <label>{formProps.label}</label>
        <input {...formProps.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'DemoForm',
})(DemoPage);

/*
 * FeaturePage
 *
 * List all the features
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class DemoPage extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div>{error}</div>;
    }
  }

  renderInput = formProps => (
    // return (
    //   <input
    //     onChange={formProps.input.onChange}
    //     value={formProps.input.value}
    //   />
    // );
    <div>
      <label>{formProps.label}</label>
      <input {...formProps.input} />
      {this.renderError(formProps.meta)}
    </div>
  );

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
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

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  return errors;
};

export default reduxForm({
  form: 'DemoForm',
  validate,
})(DemoPage);

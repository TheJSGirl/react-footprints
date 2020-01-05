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
    return <input {...formProps.input} />;
  }

  render() {
    return (
      <form>
        <Field name="title" component={this.renderInput} />
        <Field name="description" component={this.renderInput} />
      </form>
    );
  }
}

export default reduxForm({
  form: 'DemoForm',
})(DemoPage);

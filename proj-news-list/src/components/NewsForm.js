import React from 'react';
import { Field, reduxForm } from 'redux-form';

class NewsForm extends React.Component {
    renderInput = (formProps) => {
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;

        if (formProps.input.name === 'content') {
            return (
                <div className={className}>
                    <label>{formProps.label}</label>
                    <textarea {...formProps.input}></textarea>
                    {this.renderError(formProps.meta)}
                </div>
            );
        }

        return (
            <div className={className}>
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                {this.renderError(formProps.meta)}
            </div>
        );
    };

    renderError = ({ error, touched }) => {
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    onFormSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="ui form error">
                <Field name="type" component={this.renderInput} label="Тип новини: " />
                <Field name="title" component={this.renderInput} label="Назва новини" />
                <Field name="content" component={this.renderInput} label="Контент" />
                <button className="ui button primaty">Submit</button>
            </form>
        );
    }
};

const validate = formProps => {
    const errors = {};

    if (!formProps.type) {
        errors.type = 'Ви повинні вказати тип';
    }

    if(!formProps.title) {
        errors.title = "Ви повинні вказати заголовок";
    }

    if(!formProps.content) {
        errors.content = "Ви повинні вказати контент";
    }

    return errors
};

export default reduxForm({
    form: 'newsForm',
    validate
})(NewsForm);
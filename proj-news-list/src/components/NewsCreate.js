import React from 'react';
import NewsForm from './NewsForm';
import { connect } from 'react-redux';
import { createNews } from '../actions';

class NewsCreate extends React.Component {
    onFormSubmit = (formValues) => {
        this.props.createNews(formValues);
    }

    render() {
        return (
            <div>
                <h3>Створення новин</h3>
                <NewsForm onSubmit={this.onFormSubmit}/>
            </div>
        );
    }
};

export default connect(null, { createNews })(NewsCreate);
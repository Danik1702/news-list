import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchOneNews, editNews } from '../actions';
import NewsForm from './NewsForm';

class NewsEdit extends React.Component {
    componentDidMount() {
        this.props.fetchOneNews(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editNews(this.props.match.params.id, formValues)
    }

    render() {
        if (!this.props.news) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Редагування</h3>
                <NewsForm 
                    initialValues={_.pick(this.props.news, 'type', 'title', 'content')}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { news: state.news[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
    fetchOneNews, editNews
})(NewsEdit);
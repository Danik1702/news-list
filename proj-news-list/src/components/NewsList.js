import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNews, signIn, deleteNews } from '../actions';
import '../styles.css';

class NewsList extends React.Component {
    state = {};
    
    async componentDidMount() {
        await this.props.fetchNews();
        this.setState({...this.props.news.map(() => {
            return 'hidden-content-text d';
        })});
    }

    onDeleteClick = (id) => {
        this.props.deleteNews(id);
    };

    onIconClick = (numberOfNews) => {
        if (this.state[numberOfNews].match(/^[\w-]+/g)[0] === 'hidden-content-text') {
            this.setState({ [numberOfNews]: 'content-text u' });
        } else {
            this.setState({ [numberOfNews]: 'hidden-content-text d' });
        }
    };

    renderAdmin = (id) => {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }} className="right floated content">
                    <Link to={`news/edit/${id}`} className="ui secondary button">Редагувати</Link>
                    <button onClick={() => this.onDeleteClick(id)} className="ui button negative">
                        Видалити
                    </button>
                </div>
            );
        }
    }

    renderList = () => {
        return this.props.news.map((oneNews, index) => {
            if (!this.state[index]) {
                return index;
            }

            return (
                <div className="ui piled segment" key={oneNews.id}>
                    <div className="content"> 
                        <h3>{oneNews.title}</h3>
                        <p className={`${this.state[index].match(/^[\w-]+/g)}`}>{oneNews.content}</p>
                        <i className={`large ${this.state[index].match(/\w$/g)[0] === 'd' ? 'angle double down' : 'angle double up'} icon read-more`} onClick={() => this.onIconClick(index)} />
                    </div>
                    {this.renderAdmin(oneNews.id)}
                </div>
            );
        })
    }

    renderCreate = () => {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right', marginBottom: '20px' }}> 
                    <Link to="/news/create" className="ui  button">
                        Закинути новину
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                {/* <h2>Найгарячіші новини світу!</h2> */}
                <div className="header-banner">
                    <img src="http://grodnoprint.by/wp-content/uploads/2018/10/news-banner.jpg" alt="banner" />
                </div>
                {this.renderCreate()}
                <div >{this.renderList()}</div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        news: Object.values(state.news),
        isSignedIn: state.passwordsData.isSignedIn
    };
};

export default connect(mapStateToProps, { 
    fetchNews, 
    signIn,
    deleteNews
})(NewsList);
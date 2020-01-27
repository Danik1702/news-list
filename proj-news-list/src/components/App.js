import React from 'react';
import { Router, Route } from 'react-router-dom';
import NewsList from './NewsList';
import NewsCreate from './NewsCreate';
import NewsEdit from './NewsEdit';
import EntranceForm from './EntranceForm';
import Header from './Header';
import history from '../history';
import Footer from './Footer';
import '../styles.css';

const App = () => {
    return (
        <div className='ui container'>
            <Router history={history}>
                <div className="wrapper">
                    <Header />
                    <Route path='/' exact component={NewsList} />
                    <Route path='/news/create' exatc component={NewsCreate} />
                    <Route path='/news/edit/:id' exact component={NewsEdit} />
                    <Route path='/autorization' exact component={EntranceForm} />
                    <Footer />
                </div>
            </Router>
        </div>
    );
};

export default App;
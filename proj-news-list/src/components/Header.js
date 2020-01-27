import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { autorizationStatus } from '../actions';
import '../styles.css';
 
class Header extends React.Component {
    onExitClick = () => {
        this.props.autorizationStatus(false);
    }

    renderEntrance = () => {
        if (this.props.isSignedIn) {
            return (
                <Link to='/' className="header-link right-link" onClick={this.onExitClick}>
                    <h4>Вихід</h4>
                </Link>
            );
        } else {
            return (
                <Link to='/autorization' className="header-link right-link">
                    <h4>Вхід для адміна</h4>
                </Link>
            );
        }
    };

    render() {
        return (
            <div className="header-navigation">
                <Link to="/" className="header-link logo">
                    <i className="large globe icon" />
                    {/* <img src="https://image.flaticon.com/icons/png/512/21/21601.png" alt="logo"/> */}
                </Link>
                {this.renderEntrance()}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return { isSignedIn: state.passwordsData.isSignedIn };
};

export default connect(mapStateToProps, { autorizationStatus })(Header);
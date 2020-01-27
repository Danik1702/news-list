import React from 'react';
import { connect } from 'react-redux';
import { signIn, loginInput, passwordInput, autorizationStatus } from '../actions';

class EntranceForm extends React.Component {
    componentDidMount() {
        this.props.signIn();
    }

    onLoginInputChange = (e) => {
        this.props.loginInput(e.target.value);
    }

    onPasswordInputChange = (e) => {
        this.props.passwordInput(e.target.value);
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        if (this.props.entranceValues.login === this.props.entranceValues.introducedLogin && 
            this.props.entranceValues.password === this.props.entranceValues.introducedPassword) {
                this.props.autorizationStatus(true);
        } else {
            this.props.autorizationStatus(false);
        }
    }

    renderForm = () => {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="ui inverted segment">
                    <div className="ui inverted form">
                        <div className="two fields">
                            <div className="field">
                                <label>Логін(admin)</label>
                                <input 
                                    type="text" 
                                    placeholder="Логін" 
                                    onChange={this.onLoginInputChange}
                                    value={this.props.entranceValues.introducedLogin}
                                />
                            </div>
                            <div className="field">
                                <label>Пароль(admin)</label>
                                <input 
                                    type="password"
                                    placeholder="Пароль"
                                    onChange={this.onPasswordInputChange}
                                    value={this.props.entranceValues.introducedPassword}
                                />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="ui submit button">Увійти</button>
                </div>
            </form>
        );
    }

    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { entranceValues: state.passwordsData };
};

export default connect(mapStateToProps, { 
    signIn,
    loginInput,
    passwordInput,
    autorizationStatus
})(EntranceForm);
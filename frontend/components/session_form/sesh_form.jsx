import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.signup_handleSubmit = this.signup_handleSubmit.bind(this);
    this.login_handleSubmit = this.login_handleSubmit.bind(this);
    this.demo_handleSubmit = this.demo_handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  if (nextProps.loggedIn) {
    this.props.history.push('/');
  }
}


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  signup_handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  login_handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login(user);
  }

  demo_handleSubmit(e) {
    e.preventDefault();
    const user = {username: "smile", password: "123456"};
    this.props.login(user);
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="login-form-container">

        {this.renderErrors()}
        <div className="session-form">
          <br/><br/>
            <input
              placeholder="u s e r n a m e"
              type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="session-input"
              />
            <br/><br/>
            <input placeholder="p a s s w o r d"
              type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="session-input"
              />
            <br/><br/>

          <div className="signInUp">
            <button onClick={this.signup_handleSubmit}> Sign Up </button>
            <button onClick={this.login_handleSubmit}> Login </button>
          </div>
          <br/>
          <button onClick={this.demo_handleSubmit}> Demo </button>

        </div>
      </div>
    );
  }


}


export default withRouter(SessionForm);

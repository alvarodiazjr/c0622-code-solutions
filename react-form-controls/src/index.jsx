import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <form>
        <label htmlFor="username">Username: </label>
        <input value={this.state.username} onChange={this.handleUsernameChange} type="text" name='username'/>
        <label htmlFor="password">Password: </label>
        <input value={this.state.password} onChange={this.handlePasswordChange} type="password" name="password" />
        <button onClick={this.handleSubmit}>Sign Up</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const element = <RegistrationForm />;

root.render(element);

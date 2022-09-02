import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const pass = this.state.password;
    let message = '';
    let icon = '';
    if (pass.length >= 8) {
      icon += 'fa-check';
    } else if (pass.length > 0 && pass.length < 8) {
      icon += 'fa-xmark';
      message += 'Your Password is too short';
    } else {
      icon += 'fa-xmark';
      message += 'A Password is required';
    }

    return (
      <form>
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div className='input'>
          <input
            type="password"
            name='password'
            id='password'
            value={this.state.password}
            onChange={this.handleChange}/>
          <i className={`fa-solid ${icon}`}></i>
        </div>
        <div>
          <p>{message}</p>
        </div>
      </form>
    );
  }
}

export default ValidatedInput;

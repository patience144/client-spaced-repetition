import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section id="LoginRoute">
        <div className="DemoCredentials">
          <div className="AlignLeft">
            <ul>
              <li>Demo username: <strong>Grader</strong></li>
              <li>Demo password: <strong>Password1!</strong></li>
            </ul>
          </div>
        </div>
        <h2>Login</h2>
        <div className="CenterFormContainer">
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
        </div>
      </section>
    );
  }
}

export default LoginRoute

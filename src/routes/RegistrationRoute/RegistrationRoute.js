import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section id="RegistrationRoute">
        <p>Practice learning a language with the spaced repetition revision technique.</p>
        <h2>Sign up</h2>
        <div className="CenterFormContainer">
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </div>

      </section>
    );
  }
}

export default RegistrationRoute

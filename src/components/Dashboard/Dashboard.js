import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import config from '../../config'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext';

import './Dashboard.css'

function WordList (props) {

  const rows = props.data.map((w) => {
    return (
      <li key={w.id}>
        <h4>{w.original}</h4>
        <p>correct answer count: <span className="correct">{w.correct_count}</span></p>
        <p>incorrect answer count: <span className="incorrect">{w.incorrect_count}</span></p>
      </li>
    );
  });

  return (
    <ul className="WordList">{ rows }</ul>
  );
}

class Dashboard extends Component {

  static contextType = UserContext;

  componentDidMount() {

    fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        'authorization': `Bearer ${TokenService.getAuthToken()}`,
      }
    })
    .then((res) => {

      if (!res.ok) {
        return res.json().then(e => Promise.reject(e))
      }

      return res.json();
    })
    .then((json) => {
      this.context.setLanguage(json.language);
      this.context.setWords(json.words);
    })
    .catch(res => {
      this.context.setError(res.error);
    });
  }

  render() {
    return (
      <section id="Dashboard">

        <h2>Hebrew</h2>

        <p>Total correct answers: {this.context.language.total_score}</p>

        <div className="CenterFormContainer">
          <h3>Words to practice</h3>
        </div>

        <div className="CenterFormContainer">
          <WordList data={this.context.words} />
        </div>

        <Link to="/learn">Start practicing</Link>
      </section>
    );
  }
}

export default Dashboard
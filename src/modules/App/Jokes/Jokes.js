import React, { PureComponent } from 'react';
import './Jokes.styl';

export default class Jokes extends PureComponent {
  render() {
    const jokesArr = this.props.joke;
    const jokeItems = jokesArr.map(chuckJoke =>
      <li key={chuckJoke.id} className="jokes-list__li">{chuckJoke.joke}</li>
    );

    return (
      <ul>
        {jokeItems}
      </ul>
    );
  }
}

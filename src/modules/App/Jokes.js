import React, { PureComponent } from 'react';

class Jokes extends PureComponent {
  render() {
    const jokesArr = this.props.joke.value;
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

export default Jokes;

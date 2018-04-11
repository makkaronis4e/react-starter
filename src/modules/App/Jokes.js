import React, { PureComponent } from 'react';

class Jokes extends PureComponent {
  render() {
    const jokesArr = this.props.joke.value;
    const firstJoke = jokesArr[0].joke;
    console.log(jokesArr);
    return <div>{firstJoke}</div>;
  }
}

export default Jokes;

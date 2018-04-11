import React, { PureComponent } from 'react';

class Joke extends PureComponent {
  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

  const gavno = this.props.data.value[0].joke;

  render() {
    const gavno = this.props.data.value[0].joke;
    console.log(gavno);
  
  }
}

export default connect(
  state => state.AppState
)(App);

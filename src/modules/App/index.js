import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as AppActions from './AppState';
import Spinner from './Spinner';
import Jokes from './Jokes';
import './App.styl';

class App extends PureComponent {
  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

  render() {
    const jokes = this.props.data;

    if (this.props.isLoading) {
      return <Spinner />;
    }

    return <Jokes joke={jokes} />;
  }
}

export default connect(
  state => state.AppState
)(App);

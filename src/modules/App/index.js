import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as AppActions from './AppState';
import Spinner, { Jokes } from '.';
import './App.styl';

class App extends PureComponent {
  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

  render() {
    if (!this.props.isLoading) {
      return <Spinner />;
    }

    return <Jokes />;
  }
}

export default connect(
  state => state.AppState
)(App);

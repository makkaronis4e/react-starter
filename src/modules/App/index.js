import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as AppActions from './AppState';
import Spinner from './Spinner';
import Jokes from './Jokes';
import './App.styl';

class App extends PureComponent {
  componentWillMount() {
    this.props.dispatch(AppActions.loadCategories());
  }

  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

  render() {
    if (this.props.isLoading) {
      return <Spinner />;
    }

    const jokes = this.props.data;
    return <Jokes joke={jokes} />;
  }
}

export default connect(
  state => state.AppState
)(App);

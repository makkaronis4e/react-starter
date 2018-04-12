import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as AppActions from './AppState';
import Spinner from './Spinner';
import Jokes from './Jokes/Jokes';
import Filters from './Jokes/Filters';
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

    return (
      <div className="wrapper">
        <Jokes joke={this.props.jokes} />
        <Filters category={this.props.categories} />
      </div>
    );
  }
}

export default connect(
  state => state.AppState
)(App);

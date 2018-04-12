import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as AppActions from './AppState';
import Spinner from './Spinner';
import Jokes from './Jokes/Jokes';
import Filters from './Jokes/Filters';
import './App.styl';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.state = { number: 5 };
  }

  componentWillMount() {
    this.props.dispatch(AppActions.loadCategories());
  }

  componentDidMount() {
    this.props.dispatch(AppActions.loadData());
  }

  onNumberChange(e) {
    this.setState({ number: e.target.value });
  }

  render() {
    const number = this.state.number;

    if (this.props.isLoading) {
      return <Spinner />;
    }

    return (
      <div>
        <Jokes joke={this.props.jokes} />
        <div className="jokes-number">
          Number of jokes: <input id="jokes-number" type="number" min="1" max="10" value={number} onChange={this.onNumberChange} />
          <button className="refresh">Refresh</button>
        </div>
        <Filters category={this.props.categories} />
      </div>
    );
  }
}

export default connect(
  state => state.AppState
)(App);

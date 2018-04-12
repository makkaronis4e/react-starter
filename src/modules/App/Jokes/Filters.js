import React, { PureComponent } from 'react';
import * as AppActions from '../AppState';
import './Filters.styl';

export default class Filters extends PureComponent {
  constructor(props) {
    super(props);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSelectAll = this.onSelectAll.bind(this);
  }

  state = {
    number: 1,
    explicit: true,
    nerdy: false
  };

  onNumberChange(e) {
    (this.setState(
      { number: e.target.value }));
  }

  onSelectAll() {
    this.setState({
      explicit: true,
      nerdy: true
    });
  }

  render() {
    AppActions.load(this.state);

    const number = this.state.number;

    const catArr = this.props.category;

    const categoryItems = catArr.map(cat =>
      <button key={cat.toString()} className="cat-button cat-button-category">{cat}</button>
    );

    return (
      <div className="options-block">
        <div className="jokes-number">
          Number of jokes: <input id="jokes-number" type="number" min="1" max="10" value={number} onChange={this.onNumberChange} />
          <button className="refresh">Refresh</button>
        </div>
        <ul>
          {categoryItems}
          <button className="cat-button cat-button-all" onClick={this.onSelectAll}>Select All</button>
        </ul>
      </div>
    );
  }
}

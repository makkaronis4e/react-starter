import React, { PureComponent } from 'react';
import * as AppActions from '../AppState';
import './Filters.styl';

export default class Filters extends PureComponent {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSelectAll = this.onSelectAll.bind(this);
  }

  state = {
    number: 10,
    explicit: true,
    nerdy: false
  };

  onSelectAll() {
    this.setState({
      explicit: true,
      nerdy: true
    });
    const checkboxes = document.querySelectorAll('label > input');
    console.log(checkboxes.length);
    checkboxes[0].checked = false;
    checkboxes[1].checked = false;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    AppActions.load(this.state);
    console.log(this.state);

    const number = this.state.number;

    const catArr = this.props.category;

    const categoryItems = catArr.map((cat, ind) =>
      <div key={cat} className="boxes"><label htmlFor={ind}><input name={cat} type="checkbox" className="option-input checkbox" onChange={this.handleInputChange} />{cat}</label></div>
    );

    return (
      <div className="options-block">
        <div className="jokes-number">
          Number of jokes: <input name="number" id="jokes-number" type="number" min="1" max="10" value={number} onChange={this.handleInputChange} />
          <button className="refresh">Refresh</button>
        </div>
        <div className="options cat-button">
          {categoryItems}
          <button className="cat-button-all" onClick={this.onSelectAll}>Select All</button>
        </div>
      </div>
    );
  }
}


import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as AppActions from '../AppState';
import './Filters.styl';

export class Filters extends PureComponent {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSelectAll = this.onSelectAll.bind(this);
    this.reload = this.reload.bind(this);
  }

  state = {
    number: 1,
    explicit: false,
    nerdy: false,
    reload: false
  };

  onSelectAll() {
    this.setState({
      explicit: false,
      nerdy: false
    });

    const checkboxes = document.querySelectorAll('label > input');
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

  reload() {
    this.setState({
      reload: !this.state.reload
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
          <button className="refresh" onClick={this.reload}>Refresh</button>
        </div>
        <div className="options cat-button">
          {categoryItems}
          <button className="cat-button-all" onClick={this.onSelectAll}>Select All</button>
        </div>
      </div>
    );
  }
}

export default connect(
)(Filters);

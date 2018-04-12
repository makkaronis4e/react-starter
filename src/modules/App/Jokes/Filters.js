import React, { PureComponent } from 'react';
import './Filters.styl';

export default class Filters extends PureComponent {
  render() {
    const catArr = this.props.category;
    const categoryItems = catArr.map(cat =>
      <button key={cat.toString()} className="cat-button cat-button-category">{cat}</button>
    );

    return (
      <div className="options-block">
        <ul>
          {categoryItems}
          <button className="cat-button cat-button-nocategory">No category</button>
          <button className="cat-button cat-button-all">Select All</button>
        </ul>
      </div>
    );
  }
}

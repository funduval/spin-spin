import React, { Component } from 'react';

// import SearchBar from './SearchBar.js';

export default class LpSearch extends Component {
  render() {
    console.log('LpSearch prop ', this.props);
    console.log(' this.props.clickSearch: ', this.props.inputChange);
    return (
      <div>
        <img className="bgImage" src={require('../assets/images/orange.png')} />
        <div className="searchWrapper">
          <div className="logo">
            <h1>Sugr</h1>
          </div>
          {
            //<SearchBar clickSearch={this.props.clickSearch} inputChange={this.props.inputChange} />
          }
        </div>
      </div>
    );
  }
}

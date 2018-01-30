import React, { Component } from 'react';
import { Link } from 'react-router';

import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const header = {
  button: {
    '&:hover': {
      background: 'white'
    }
  },
  avatar: {
    margin: 0
  }
};

export default class DboardHead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('header prop ', this.props);
    return (
      <div style={{ display: 'inline', float: 'left' }}>
        {/*   <ListItem
          disabled={true}
          leftAvatar={
              <Avatar size={40} style={header.avatar}>
              SUGR
            </Avatar> />
          */}

        <div className="dashLogo">
          <h1 style={{ fontSize: '90px', textAlign: 'left' }}>Sugr</h1>
        </div>
        {/*
        <div className="row">
          <ul className="navLabel">
            <li style={{ display: 'inline', float: 'leftt' }}>
              <Link to="/">Log Out</Link>
            </li>
          </ul>
        </div>
      */}
      </div>
    );
  }
}

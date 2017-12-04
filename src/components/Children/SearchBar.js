import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const SearchStyle = {
    btnStyle: {
        color: 'white',
        backgroundColor: '#90CAF9',
        primary: true,
        textTransform: 'capitalize',
        width: '30%',
        height: '45'
    },
    inputStyle: {
        backgroundColor: '#F5F5F5',
        padding: '10px 20px',
        borderWidth: '1px',
        borderRadius: '3px 0 0 3px',
        'input::placeholder': {
            color: 'red'
        }
    }
};

export default class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar dBoardSearch">
                <input
                    id="search"
                    type="text"
                    placeholder="Search for food eg. &quot;bananas&quot;, Snickers Bar&quot;"
                    required
                    onChange={ev => {
                        this.props.inputChange(ev.currentTarget.value, 'SearchItem');
                    }}
                    style={SearchStyle.inputStyle}
                />
                <FlatButton label="Show Me" style={SearchStyle.btnStyle} onClick={this.props.clickSearch} />
            </div>
        );
    }
}

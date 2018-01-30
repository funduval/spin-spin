import React from 'react';
import './App.css';
import './Main.js';
import API from './API.js';
import { DropdownButton } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

const Results = ({ results, handleFormSubmit, showResults, handleLog, user }) => (
  <DropdownButton style={{ borderStyle: showResults ? 'solid' : 'none' }}>
    {/*.........Destructuring assignment draws out just what's needed from results array http://exploringjs.com/es6/ch_destructuring.html#sec_overview-destructuring....*/}

    {results.map(result => {
      const { item_name, brand_name, nf_sugars } = result.fields;

      handleLog = event => {
        event.preventDefault();
        let d = new Date();
        let date = '';
        date += d.getMonth() + 1 + '/';
        date += d.getDate() + '/';
        date += d.getFullYear();

        user = 'user';
        let logged = true;

        API.postSaved(user, item_name, brand_name, nf_sugars, date, logged);
        console.log('logged item ' + item_name + ' ' + brand_name + ' ' + nf_sugars + ' grams on ' + date);
        let showResults = false;
      };

      {
        /*...Map items iterating through results & at each pass assigning a new key by grabbing a unique identifier like _id from the results object and rendering a list item*/
      }

      return (
        <MenuItem
          key={result._id}
          className="list-group-item"
          onClick={handleLog}
          style={{ display: showResults ? 'block' : 'none' }}
        >
          <h5 className="contains">{item_name}</h5>

          <h5>{brand_name}</h5>
          <h5>{nf_sugars}g sugar</h5>

          {/*} <button
           
            style={{
              color: 'black',
              display: 'inline',
              float: 'right',
              border: 'solid lightgrey',
              marginTop: '-40px',
              paddingLeft: '4px'
            }}
          >
            log
          </button>*/}
        </MenuItem>
      );
    })}
  </DropdownButton>
);

export default Results;

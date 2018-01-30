import React from 'react';

const Form = props => ({
  render() {
    return (
      <div>
        <form
          style={{
            marginBottom: '30px',
            marginLeft: '-70px'
          }}
        >
          <input
            onChange={props.handleInputChange}
            value={props.item}
            name="item"
            type="text"
            style={{
              backgroundColor: '#F5F5F5',

              padding: '13px 10px',
              borderWidth: '1px',
              borderRadius: '3px 0 0 3px'
            }}
            placeholder="Search for food eg. &quot;bananas&quot;, Snickers Bar&quot;"
          />

          <button
            className="btn btn-primary"
            onClick={props.handleFormSubmit}
            id="submitter"
            style={{
              backgroundColor: '#90CAF9',
              color: 'white',
              width: '10%',
              height: '55',
              float: 'right'
            }}
          >
            Show Me
          </button>
        </form>
      </div>
    );
  }
});

export default Form;

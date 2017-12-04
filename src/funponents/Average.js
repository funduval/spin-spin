import React from 'react';
import './App.css';
import './Main.js';

//connect all this to SUBMIT button/page
const Average = ({ results, handleFormSubmit, showResults }) => (
    <div className="well" id="averageWell">
        {results.map(result => {
            /******just parsing sugars for these purposes. Ideally would be getting numbers from an axios call to the database---geting user's week's worth of logged sugar grams************/
            const { nf_sugars } = result.fields;

            return (
                <div key="20" className="panel">
                    <h2 style={{ color: '#fd746a', padding: '5px' }}>Average Daily: </h2>
                    <div
                        className="panel-body"
                        data-value={nf_sugars}
                        style={{ display: showResults ? 'none' : 'block' }}
                    >
                        {/*Justa buncha Math. Not tied to any of these calculations, just figuring out how to pass meaningful values along. There will eventtually be numbersfrom the db, the backend. Right now, to fake dynamic numbers, I am grabbing this from the front end--the API result at a predetermined index: result[9]*/}
                        <h5>{nf_sugars * 35 / 7} Sugar grams consumed per day </h5>
                        <h5>{Math.floor(nf_sugars * 35 / 7 - 25)} Grams more than the daily allowance </h5>
                        <h5>Total of {(nf_sugars * 35 / 7 - 25) * 365 * 4} pure sugar calories per year,</h5>
                        <h5>
                            Which, if that's above your daily caloric needs,{'\n'}
                            potentially amounts to {Math.floor((nf_sugars * 35 / 7 - 25) * 365 * 4 / 3500)} pounds per
                            year!
                        </h5>
                    </div>
                </div>
            );
        })}
    </div>
);

export default Average;

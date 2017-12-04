//connect all this to SUBMIT button/page
import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';
import './App.css';
import './Main.js';
export default class Graph extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// Sets all the stuff that shows up on the screen, s.a. style, axis titles, etc.
			options: {
				title: 'Sugar Consumed',
				hAxis: { title: 'Day' },
				vAxis: { title: 'gm of sugar consumed daily', minValue: 0, maxValue: 30 },
				colors: ['#FF8A80', '#90CAF9', '#afafaf'],
				// this sets the types of the three rows, sugar consumed to bar and female and male allowance to a line
				seriesType: 'line',
				series: { 0: { type: 'bars' } }
			},
			data: [
				['Day', 'Sugar Consumed', 'Female Allowance', 'Male Allowance'],
				['Sun', 25, 24, 36],
				['Mon', 16, 24, 36],
				['Tues', 9, 24, 36],
				['Wed', 8, 24, 36],
				['Thurs', 7, 24, 36],
				['Fri', 27, 24, 36],
				['Sat', 35, 24, 36]
			]
		};
	}
	render() {
		return (
			<div className={'sugar-chart-container'}>
				<Chart
					chartType="ComboChart"
					data={this.state.data}
					options={this.state.options}
					width="300px"
					height="300px"
					legend_toggle
				/>
			</div>
		);
	}
}

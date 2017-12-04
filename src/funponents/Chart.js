import React, { Component } from 'react';
import './App.css';
import './Main.js';

//connect all this to SUBMIT button/page
class Chart extends Component {
	render() {
		return (
			<div>
				<img
					src="http://chart.apis.google.com/chart?chs=300x300&cht=bvs&chtt=Live Preview&chd=s:Zkgr2H,Wkv92k&chco=fd8075,92caf7&chdl=protein|sugar&chxl=0:|mon|tues|wed|thur|fri|sat|sun|&chxt=x"
					alt="chart"
				/>
			</div>
		);
	}
}

export default Chart;

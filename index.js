import React, { Component } from 'react';
import { render } from 'react-dom';

import SlotMachine from './apps/slot-machine'



class SlotMachineComponent extends Component {	
	constructor() {
		super();
	}

	render() {

		const slotMachineLeight = [0, 1, 2];

		const liEml = (data, index) => <li key={index}>{ data }</li>;

		const time = [0, 1000, 500];

		const frequencyNum = [30, 40, 35];

		return (
			<div className="slot-machine-cnt">
				<div className="slot-machine-list">
					{
						slotMachineLeight.map((data, index) => {
							return <SlotMachine time={time} timeIndex={index} frequencyNum={frequencyNum} key={index} li={liEml} />	
						})
					}
				</div>
			</div>	
		)
	}
}




render(<SlotMachineComponent />, document.getElementById('cnt'));

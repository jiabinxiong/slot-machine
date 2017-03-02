import React, { Component } from 'react';

class SlotMachine extends Component {
	constructor() {
		super();
		this.state = {
			top: 0,
			speed: 30,
			highest: false,
			frequency: 0,
			lengthNum: 14,
			testDataArr: ['a', 'b', 'c']
		}
	}

	componentDidMount() {
		this.stateTimer = setTimeout(() => {
			this.timedCount();
		}, this.props.time[this.props.timeIndex])
	}

	componentWillUnmount() {
		clearTimeout(this.stateTimer);
		clearTimeout(this.timer);
	}

	timedCount() {
		let lengthNumState;	

		this.timer = setTimeout(() => {
			this.timedCount();

			if(this.state.top >= 110) {
				let testDataArrCop = this.state.testDataArr;

				testDataArrCop.push(testDataArrCop.shift(0, 1));

				this.setState({
					top: 0,
					testDataArr: testDataArrCop,
					frequency: ++this.state.frequency
				});
			}			

			if(this.state.frequency >= this.props.frequencyNum[this.props.timeIndex]) {
				if(this.state.lengthNum == 0) {
					this.setState({
						top: this.state.top + 1
					});

					if(parseInt(this.state.top) >= 110) {
						this.setState({
							top: 110
						});
						clearTimeout(this.timer);
					}
				} else {
					this.setState({
						top: this.state.top + ((--this.state.lengthNum) / 14) 
					});
				}

			} else {
				
				this.setState({
					top: this.state.top + ((++this.state.lengthNum) / 14) 
				});
			}

		}, this.state.speed);

	}

	render() {
		let liEml = (data, index) => {
			return this.props.li(data, index)
		}	


		return (
			<div className="slot-machine-block">
				<ul className="list" style={{ top: -this.state.top + 'px'}}>
					{
						this.state.testDataArr.map((data, index) => {
							return liEml(data, index);
						}) 
					}
				</ul>
			</div>
		)
	}
}


export default SlotMachine

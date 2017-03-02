import React, { Component } from 'react';

class SlotMachine extends Component {
	constructor() {
		super();
		this.state = {
			top: 0,
			speed: 100,
			highest: false,
			timers: 0,
			n: 1,
			testDataArr: ['a', 'b', 'c']
		}
	}

	componentDidMount() {
		this.timedCount();

		console.log(this.state.speed);
	}
	timedCount() {
		this.timer = setTimeout(() => {
			this.timedCount();

			this.setState({
				top: this.state.top + 8
			});

			if(this.state.speed == 10) {
				this.setState({
					highest: true
				});
			} 

			if(this.state.highest) {
				if(this.state.timers > 24) {
					if(this.state.speed == 100) {
						this.setState({
							speed: 100
						});

						if(this.state.top >= 110) {
							clearTimeout(this.timer);	
						} 

					} else {
						this.setState({
							speed: ++this.state.speed
						});
					}	

				} else {
					this.setState({
						speed: 10
					});
				}

			} else {
				this.setState({
					speed: --this.state.speed
				});
			}
			

			if(this.state.top >= 110) {
				let testDataArrCop = this.state.testDataArr;

				testDataArrCop.push(testDataArrCop.shift(0, 1));

				this.setState({
					top: 0,
					testDataArr: testDataArrCop,
					timers: ++this.state.timers
				});
			}			

		}, this.state.speed);

	}

	render() {
		let liEml = (data, index) => {
			return <li key={index}>{data}</li>
		}


		return (
			<div className="slot-machine-cnt">
				<div className="slot-machine-list">
					<ul className="list" style={{ top: -this.state.top + 'px'}}>
						{
							this.state.testDataArr.map((data, index) => {
								return liEml(data, index);
							}) 
						}
					</ul>
				</div>
			</div>	
		)
	}
}

export default SlotMachine

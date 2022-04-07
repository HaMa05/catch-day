import React from 'react';
import Header from './component/Header';
import Inventory from './component/Inventory';
import Order from './component/Order';

class App extends React.Component {
	state = {
		fishes: {},
		order: {},
	};
	addFish = (fish) => {
		const fishes = { ...this.state.fishes };
		fishes[`fish${Date.now()}`] = fish;
		this.setState({
			fishes,
		});
	};
	render() {
		return (
			<div className='catch-of-the-day'>
				<div className='menu'>
					<Header tagline='Fresh Seafood MArket' />
				</div>
				<Order />
				<Inventory addFish={this.addFish} />
			</div>
		);
	}
}

export default App;

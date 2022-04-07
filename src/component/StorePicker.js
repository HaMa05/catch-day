import React from 'react';
import { getFunName } from '../helpers';
import { useNavigate } from 'react-router-dom';

const StorePicker = (props) => {
	const myInput = React.createRef();
	const navigate = useNavigate();
	const goToStore = (event) => {
		// 1. Stop the form from submitting
		event.preventDefault();

		// 2. get the text from that input
		const storeName = myInput.current.value;
		// 3. Change the pate tp /store/....
		navigate(`/store/${storeName}`);
	};

	return (
		<form className='store-selector' onSubmit={goToStore}>
			<h2>Please Enter A Store</h2>
			<input type='text' ref={myInput} required placeholder='Store name' defaultValue={getFunName()} />
			<button type='submit'>Visit Store</button>
		</form>
	);
};

export default StorePicker;

import React from 'react';

const StorePicker = (props) => (
	<form className='store-selector'>
		<h2>Please Enter A Store</h2>
		<input type='text' required placeholder='Store name' />
		<button type='submit'>Visit Store</button>
	</form>
);

export default StorePicker;

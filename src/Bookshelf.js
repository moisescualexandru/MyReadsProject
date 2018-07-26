import React, { Component } from 'react';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';

class Bookshelf extends Component {

	render() {
		return(
			<div className='list-books-content'>
				<CurrentlyReading 
					
				/>

				<WantToRead 
					
				/>

				<Read 
					
				/>
			</div>
		)
	}
}

export default Bookshelf;
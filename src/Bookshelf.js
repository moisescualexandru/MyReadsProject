import React, { Component } from 'react';
import CurrentlyReading from './CurrentlyReading';
import WantToRead from './WantToRead';
import Read from './Read';

class Bookshelf extends Component {

	render() {
		return(
			<div className='list-books-content'>
				<CurrentlyReading 
					curRead={this.props.books.filter(book => book.shelf === 'currentlyReading')}
					updateShelf={this.props.updateShelf}
				/>

				<WantToRead 
					wntRead={this.props.books.filter(book => book.shelf === 'wantToRead')}
					updateShelf={this.props.updateShelf}
				/>

				<Read 
					read={this.props.books.filter(book => book.shelf === 'read')}
					updateShelf={this.props.updateShelf}
				/>
			</div>
		)
	}
}

export default Bookshelf;
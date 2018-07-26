import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrentlyReading extends Component {
	static propTypes = {
		curRead: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired
	}
	
	render() {
		return(
			<div className='bookshelf'>
				<h2 className='bookshelf-title'>Currently Reading</h2>
				<div className='bookshelf-books'>
					<ol className='books-grid'>
						{this.props.curRead.map((book) => (
							<li key={book.id}>
								<div className='book'>
									<div className='book-top'>
										<div 
										 className='book-cover' 
										 style={{
										 	width: 128,
										 	height: 193,
										 	backgroundImage: `url(${book.imageLinks.smallThumbnail})`
										 }}
										></div>
										<div className='book-shelf-changer'>
											<select defaultValue='currentlyReading' onChange={(event) => this.props.updateShelf(book.id, event.target.value)}>
												<option value='move' disabled>Move to...</option>
												<option value='currentlyReading'>Currently Reading</option>
												<option value='wantToRead'>Want to Read</option>
												<option value='read'>Read</option>
												<option value='none'>None</option>
											</select>
										</div>
									</div>
									<div className='book-title'>{book.title}</div>
									{book.authors.length === 1 && 
									 (<div className='book-authors'>{book.authors[0]}</div>)}
									{book.authors.length > 1 &&
									 (book.authors.map((author) => (
									  <div key={author} className='book-authors'>{author}</div>
									 )))}
									 {book.averageRating && (
									 <div className='book-title'>Average Rating: {book.averageRating} <span className='fa fa-star'></span></div>
									 )}
								</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default CurrentlyReading;


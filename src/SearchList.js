import React, { Component } from 'react';

class SearchList extends Component {

	render() {
		return(
			<div className='search-books-results'>
					{this.props.searched && (
				 	<ol className='books-grid'>
				 		{this.props.searched.map((book) => (
							<li key={book.id}>
								<div className='book'>
									<div className='book-top'>
										{book.imageLinks && (
										 <div 
										 className='book-cover' 
										 style={{
										 	width: 128,
										 	height: 193,
										 	backgroundImage: `url(${book.imageLinks.smallThumbnail})`
										 }}
										 ></div>
										)}
										{!book.imageLinks && (
										 <div
										 className='book-cover' 
										 style={{
										 	width: 128,
										 	height: 193,
										 	backgroundImage: 'url(/icons/placeholder.jpg)'										 }}
										 ></div>
										)}
										<div className='book-shelf-changer'>
											<select value={book.shelf} onChange={(event) => this.props.addBook(book.id, event.target.value)}>
												<option value='move' disabled>Move to...</option>
												<option value='currentlyReading'>Currently Reading</option>
												<option value='wantToRead'>Want to Read</option>
												<option value='read'>Read</option>
												<option value='none'>None</option>
											</select>
										</div>
									</div>
									<div className='book-title'>{book.title}</div>								 
									{book.authors && book.authors.length === 1 && 
									 (<div className='book-authors'>{book.authors[0]}</div>)}
									{book.authors && book.authors.length > 1 &&
									 (book.authors.map((author) => (
									  <div key={author} className='book-authors'>{author}</div>
									 )))}
								</div>
							</li>
						))}
					</ol>)}
					{!this.props.searched && (
						<div></div>
					)}
				</div>
		)
	}
}

export default SearchList;
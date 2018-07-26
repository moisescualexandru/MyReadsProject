import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchList from './SearchList';

class Search extends Component {
	state = {
		query: '',
		searched: []
	}

	updateQuery = (query) => {
		this.setState({ query: query });
		BooksAPI.search(query).then((books) => {
			this.setState({ searched: books });
		}).then(() => this.state.query && this.state.searched.error !== 'empty query' ? this.addShelf() : '')
	}

	addShelf() {
		this.setState(state => ({
			searched: state.searched.filter(book => book.shelf = 'none') 
		}));

		const array = this.props.books;

		let booksOnShelf = this.state.searched.filter(function(book) {
			return array.filter(function(bookOnShelf) {
				return bookOnShelf.id === book.id ? book.shelf = bookOnShelf.shelf : '';
			}).length !== 0
		});

		let booksNotOnShelf = this.state.searched.filter(function(book) {
			return array.filter(function(bookNotOnShelf) {
				return bookNotOnShelf.id === book.id;
			}).length === 0
		});

		this.setState({ searched: booksNotOnShelf.concat(booksOnShelf) })

	}

	render() {
		return(
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link to='/' className='close-search'>Close</Link>
					<div className='search-books-input-wrapper'>
						<input 
						 type='text' 
						 placeholder='Search by title or author' 
						 value={this.state.query}
						 onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>
				</div>
				{this.state.searched && this.state.searched.error !== 'empty query' && this.state.query && (
					<SearchList 
						searched={this.state.searched}
						addBook={this.props.addBook}
					/>
				)}				
			</div>
		)
	}
}

export default Search;
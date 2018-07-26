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
		})
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
					<SearchList 
					
					/>
			</div>
		)
	}
}

export default Search;
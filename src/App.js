import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import './App.css';
import MyBooks from './MyBooks'
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import Search from './Search';

class App extends Component {

  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    }).catch(error => console.log(error));
  }

  updateShelf = (bookId, shelf) => {
    BooksAPI.update({id: bookId}, shelf).then((book) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books });
    })
      
    }).catch(error => console.log(error));
    
  }

  addBook = (bookId, shelf) => {
    BooksAPI.get(bookId).then((book) => {
      this.setState((state) => ({
        books: state.books.concat([ book ])
      }))
    }).then(() => {
      this.updateShelf(bookId, shelf);
    }).catch(error => console.log(error));
    
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <MyBooks />
            <Bookshelf 
            books={this.state.books}
            updateShelf={this.updateShelf}
            />
            <div className='open-search'>
              <Link to='/search'/>
            </div>
          </div>
        )}
        />

        <Route path='/search' render={({ history }) => (
          <Search 
           addBook={(bookId, shelf) => {
            this.addBook(bookId, shelf);
            history.push('/');
            }}
           books={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import { Route } from 'react-router-dom'; 
import './App.css';
import MyBooks from './MyBooks'
import Bookshelf from './Bookshelf';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <MyBooks />
            <Bookshelf 

            />
            <div className='open-search'>
              <Link to='/search'/>
            </div>
          </div>
        )}
        />

        <Route path='/search' render={({ history }) => (
          <Search 
          
          />
        )} />
      </div>
  }
}

export default App;

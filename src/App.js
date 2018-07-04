import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    query: '',
    allBooks: [],
    allSearchResults: []
  }

  componentDidMount() {
    this.showAllBooks()
  }

  showAllBooks = () => {
    BooksAPI.getAll().then( books => {
      this.setState({ allBooks: books })
    })
  }

  searchBooks = (e) => {
    BooksAPI.search('Art').then( books => {
      this.setState({allSearchResults: books})
    })
  }

  changeShelfMainPage = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.showAllBooks())
  }

  changeShelfSearchPage = (book, shelf) => {
    BooksAPI.update(book, shelf)
  }

  addShelfPropToExistedBooks = (results) => {
    const booksInShelf = this.state.allBooks
    results.forEach( result => {
      booksInShelf.forEach( book => {
        (book.id === result.id) && (result.shelf = book.shelf)
      })
    })
    return results
  }

  render() {
    return(
      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.allBooks}
            handleShelfChange={this.changeShelfMainPage}
          />
        )}/>

      <Route path='/search' render={() => (
        <SearchBooks
          books={this.state.allBooks}
          result={this.addShelfPropToExistedBooks(this.state.allSearchResults)}
          getQuery={this.state.query}
          searchBooks={this.searchBooks}
          handleShelfChange={this.changeShelfSearchPage}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp

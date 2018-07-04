import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    query: '', // Astronomy, Art, Drama, Design, Cook, Games
    allBooks: [], // All books in Main Page
    allSearchResults: [] // All books in Search Page
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
    BooksAPI.search('Art')
      .then( this.addShelfPropToExistedBooks )
      .then( results => this.setState({allSearchResults: results}) )
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.showAllBooks())
  }

  addShelfPropToExistedBooks = (results) => {
    const booksInShelf = this.state.allBooks

    return new Promise( resolve => {
      results.forEach( result => {
        booksInShelf.forEach( book => {
          (book.id === result.id) && (result.shelf = book.shelf)
        })
      })
      resolve(results)
    })
  }

  render() {
    return(
      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.allBooks}
            handleShelfChange={this.changeShelf}
          />
        )}/>

      <Route path='/search' render={() => (
        <SearchBooks
          books={this.state.allSearchResults}
          getQuery='Art'
          searchBooks={this.searchBooks}
          handleShelfChange={this.changeShelf}
        />
      )}/>
      </div>
    )
  }
}

export default BooksApp

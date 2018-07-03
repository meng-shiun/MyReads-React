import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    screen: 'search', //main, search
    query: '',
    allBooks: [],
    allSearchResults: []
  }

  componentDidMount() {
    this.showAllBooks()
  }

  showAllBooks = () => {
    BooksAPI.getAll().then(books => {
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

  render() {
    // TODO: clean up code for results[]
    const results = this.state.allSearchResults
    const booksInShelf = this.state.allBooks

    results.forEach( result => {
      booksInShelf.forEach( book => {
        if (book.id === result.id) {
          result.shelf = book.shelf
        }
      })
    })

    return(
      <div>
        {this.state.screen === 'main' && (
          <ListBooks
            books={this.state.allBooks}
            handleShelfChange={this.changeShelfMainPage}
          />
        )}

        {this.state.screen === 'search' && (
          <SearchBooks
            books={this.state.allBooks}
            result={results}
            getQuery={this.state.query}
            searchBooks={this.searchBooks}
            handleShelfChange={this.changeShelfSearchPage}
          />
        )}
      </div>
    )
  }
}

export default BooksApp

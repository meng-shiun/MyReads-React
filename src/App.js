import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    query: '',
    allBooks: [], // All books in Main Page
    allSearchResults: [] // All books in Search Page
  }

  componentDidMount() {
    this.showAllBooks()
  }

  clearQuery = () => {
    this.setState({query: '', allSearchResults: []})
  }

  showAllBooks = () => {
    BooksAPI.getAll()
      .then(this.correctThumbnailAndAuthor)
      .then(books => this.setState({allBooks: books}))
  }

  handleSearchTextChange = (searchText) => {
    this.setState({query: searchText})
    if (!searchText) return
    this.showSearchResults(searchText)
  }

  showSearchResults = (searchText) => {
    BooksAPI.search(searchText)
      .then(this.correctThumbnailAndAuthor)
      .then(this.addShelfPropToExistedBooks)
      .then(results => this.setState({allSearchResults: results}))
      .catch(() => this.setState({allSearchResults: []}))
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.showAllBooks())
  }

  correctThumbnailAndAuthor = (data) => {
    return new Promise(resolve => {
      data.forEach(book => {
        if (!book.imageLinks) {
          book.imageLinks = []
          book.imageLinks.thumbnail = ''
        }
        if (!book.authors) {
          book.authors = []
        }
      })
      resolve(data)
    })
  }

  addShelfPropToExistedBooks = (data) => {
    const booksInShelf = this.state.allBooks
    return new Promise((resolve) => {
      if (data.length > 0) {
        data.forEach(result => {
          booksInShelf.forEach(book => {
            (book.id === result.id) && (result.shelf = book.shelf)
          })
        })
        resolve(data)
      }
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
            <ListBooks
              books={this.state.allBooks}
              handleShelfChange={this.changeShelf}
              onVisitSearchPage={this.clearQuery}
              />
          )}/>

        <Route path='/search' render={() => (
            <SearchBooks
              books={this.state.allSearchResults}
              handleShelfChange={this.changeShelf}
              searchText={this.state.query}
              onSearchTextChange={this.handleSearchTextChange}
              />
          )}/>
      </div>
    )
  }
}

export default BooksApp

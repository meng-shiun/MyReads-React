import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    allBooks: [], // All books in Main Page
  }

  componentDidMount() {
    this.showAllBooks()
  }

  showAllBooks = () => {
    BooksAPI.getAll()
      .then(this.correctThumbnailAndAuthor)
      .then(books => this.setState({allBooks: books}))
  }

  changeShelf = (book, shelf) => {
    console.log('book', book, ' move to:', shelf);
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

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
            <ListBooks
              books={this.state.allBooks}
              handleShelfChange={this.changeShelf}
              />
          )}/>

        <Route path='/search' render={() => (
            <SearchBooks
              books={this.state.allBooks}
              handleShelfChange={this.changeShelf}
              />
          )}/>
      </div>
    )
  }
}

export default BooksApp

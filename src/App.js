import React from 'react'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    screen: 'main', //main, search
    allBooks: []
  }

  componentDidMount() {
    this.showAllBooks()
  }

  showAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ allBooks: books })
    })
  }

  updateBookShelf = (book, shelf) => {
    console.log('[ListBooks] move', book.title, 'to:', shelf)
    BooksAPI.update(book, shelf).then(() => this.showAllBooks())
  }

  render() {
    console.log(this.state.allBooks);
    return(
      <div>
        {this.state.screen === 'main' && (
          <ListBooks books={this.state.allBooks} handleShelfChange={this.updateBookShelf}/>
          // <ListBooks/>
        )}

        {this.state.screen === 'search' && (
          <SearchBooks/>
        )}
      </div>
    )
  }
}

export default BooksApp

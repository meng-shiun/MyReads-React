import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class ListBooks extends React.Component {

  state = {
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
    const currentlyReadingBooks = []
    const wantToReadBooks = []
    const readBooks = []

    this.state.allBooks.forEach(book => {
      if (book.shelf === 'currentlyReading') {
        currentlyReadingBooks.push(book)
      }
      if (book.shelf === 'wantToRead') {
        wantToReadBooks.push(book)
      }
      if (book.shelf === 'read') {
        readBooks.push(book)
      }
    })

    return (
      <div>
        <div className='list-books'>

          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>

          <div className='list-books-content'>
            <BookShelf title='Currently Reading' books={currentlyReadingBooks} onShelfChange={this.updateBookShelf}/>
            <BookShelf title='Want to Read' books={wantToReadBooks} onShelfChange={this.updateBookShelf}/>
            <BookShelf title='Read' books={readBooks} onShelfChange={this.updateBookShelf}/>
          </div>

          <div className='open-search'>
            <a>Add a book</a>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks

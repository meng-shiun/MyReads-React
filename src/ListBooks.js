import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class ListBooks extends React.Component {

  state = {
    // shelf: 'currentlyReading' // currentlyReading, wantToRead, read
    allBooks: [],
    recentBooks: [],
    wantToReadBooks: [],
    readBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      books.map(book => {
        if (book.shelf === 'currentlyReading') {
          this.setState((state) => ({
            recentBooks: state.recentBooks.concat({
              "id": book.id,
              "title": book.title,
              "authors": book.authors,
              "cover": book.imageLinks.smallThumbnail
            })
          }))
        }

        if (book.shelf === 'wantToRead') {
          this.setState((state) => ({
            wantToReadBooks: state.wantToReadBooks.concat({
              "id": book.id,
              "title": book.title,
              "authors": book.authors,
              "cover": book.imageLinks.smallThumbnail
            })
          }))
        }

        if (book.shelf === 'read') {
          this.setState((state) => ({
            readBooks: state.readBooks.concat({
              "id": book.id,
              "title": book.title,
              "authors": book.authors,
              "cover": book.imageLinks.smallThumbnail
            })
          }))
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div className='list-books'>

          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>

          <div className='list-books-content'>
            <BookShelf title='Currently Reading' books={this.state.recentBooks}/>
            <BookShelf title='Want to Read' books={this.state.wantToReadBooks}/>
            <BookShelf title='Read' books={this.state.readBooks}/>
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

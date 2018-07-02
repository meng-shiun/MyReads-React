import React from 'react'
import BookShelf from './BookShelf'

class ListBooks extends React.Component {

  state = {
    // shelf: 'currentlyReading' // currentlyReading, wantToRead, read
  }

  componentDidMount() {
    // TODO: When moving book to another shelf, update BookShelf
  }


  render() {
    const currentlyReadingBooks = []
    const wantToReadBooks = []
    const readBooks = []

    this.props.books.forEach(book => {
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
            <BookShelf title='Currently Reading' books={currentlyReadingBooks}/>
            <BookShelf title='Want to Read' books={wantToReadBooks}/>
            <BookShelf title='Read' books={readBooks}/>
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

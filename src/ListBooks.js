import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const ListBooks = (props) => {

    const currentlyReadingBooks = []
    const wantToReadBooks = []
    const readBooks = []

    const { books, handleShelfChange, onVisitSearchPage } = props

    books.forEach(book => {
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
            <BookShelf
              title='Currently Reading'
              books={currentlyReadingBooks}
              onShelfChange={handleShelfChange}
            />
            <BookShelf
              title='Want to Read'
              books={wantToReadBooks}
              onShelfChange={handleShelfChange}
            />
            <BookShelf
              title='Read'
              books={readBooks}
              onShelfChange={handleShelfChange}
            />
          </div>
          <div className='open-search'>
            <Link to='/search' onClick={onVisitSearchPage}>Add a book</Link>
          </div>
        </div>
      </div>
    )
}

export default ListBooks

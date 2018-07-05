import React from 'react'
import Book from './Book'

const BooksGrid = (props) => {
  const { books, onShelfChange, currentPage } = props

  return (
    <ol className='books-grid'>
      {books.map(book => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          authors={book.authors}
          cover={book.imageLinks.thumbnail}
          shelf={book.shelf}
          onShelfChange={onShelfChange}
          currentPage={currentPage}
          />
      ))}
    </ol>
  )
}

export default BooksGrid

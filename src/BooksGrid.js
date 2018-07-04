import React from 'react'
import Book from './Book'

const BooksGrid = (props) => {
  return (
    <ol className='books-grid'>
      {props.books.map(book => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          authors={book.authors}
          cover={book.imageLinks.thumbnail}
          shelf={book.shelf}
          onShelfChange={props.onShelfChange}
          />
      ))}
    </ol>
  )
}

export default BooksGrid

import React from 'react'
import Book from './Book'

class BooksGrid extends React.Component {
  render() {
    const { books, onShelfChange } = this.props

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
            />
        ))}
      </ol>
    )
  }
}

export default BooksGrid

import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {

  render() {
    const { title, books, onShelfChange } = this.props

    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>
        <div className='bookshelf-books'>
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
        </div>
      </div>
    )
  }
}

export default BookShelf

import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {

  render() {
    const { title, books } = this.props

    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {books.map(book => (
              <Book key={book.id} title={book.title} authors={book.authors} cover={book.imageLinks.thumbnail}/>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf

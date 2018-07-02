import React from 'react'
import Book from './Book'

const BookShelf = (props) => {
  const { title } = props

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {props.books.map(book => (
            <Book key={book.id} title={book.title} authors={book.authors} cover={book.cover}/>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf

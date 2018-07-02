import React from 'react'
import BooksGrid from './BooksGrid'

const BookShelf = (props) => {
  const { title } = props

  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <BooksGrid/>
      </div>
    </div>
  )
}

export default BookShelf

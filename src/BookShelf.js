import React from 'react'
import PropTypes from 'prop-types'
import BooksGrid from './BooksGrid'

const BookShelf = (props) => {
  const { title, books, onShelfChange } = props
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <BooksGrid books={books} onShelfChange={onShelfChange} currentPage='main'/>
      </div>
    </div>
  )
}

BookShelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired
}

export default BookShelf

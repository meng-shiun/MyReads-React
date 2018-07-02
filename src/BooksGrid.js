import React from 'react'
import Book from './Book'

const BooksGrid = (props) => {
  return (
    <ol className='books-grid'>
      <Book/>
      <Book/>
    </ol>
  )
}

export default BooksGrid

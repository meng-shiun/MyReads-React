import React from 'react'
import BooksGrid from './BooksGrid'

const SearchBooks = (props) => {
  return (
    <div>
      <h2>SearchBooks Page</h2>
      <p>[input] SearchBooksBar</p>
      <button>Close Search</button>
      <BooksGrid/>
    </div>
  )
}

export default SearchBooks

import React from 'react'
import BooksGrid from './BooksGrid'

const SearchBooks = (props) => {
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <a className='close-search'>Close</a>
        <div className='search-books-input-wrapper'>
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
            */}
            <input type='text' placeholder='Search by title or author'></input>
          </div>
        </div>

        <div className='search-books-results'>
          <h3>Search result:</h3>
          <BooksGrid/>
        </div>
      </div>
    )
  }

  export default SearchBooks

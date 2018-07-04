import React from 'react'
import { Link } from 'react-router-dom'
import BooksGrid from './BooksGrid'

class SearchBooks extends React.Component {

  render() {
    const { books, getQuery, searchBooks, handleShelfChange } = this.props

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>Close</Link>
          <div className='search-books-input-wrapper'>
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              */}
              <input type='text' placeholder='Search by title or author' value={getQuery} onChange={searchBooks}></input>
            </div>
          </div>
          <div className='search-books-results'>
            <BooksGrid books={books} onShelfChange={handleShelfChange}/>
          </div>
          </div>
        )
      }
    }

    export default SearchBooks

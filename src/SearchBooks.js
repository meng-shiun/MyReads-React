import React from 'react'
import {Link} from 'react-router-dom'
import BooksGrid from './BooksGrid'

class SearchBooks extends React.Component {

  handleQueryChange = (e) => {
    this.props.onSearchTextChange(e.target.value)
  }

  render() {
    const {books, searchText, handleShelfChange} = this.props

    return (<div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>Close</Link>
        <div className='search-books-input-wrapper'>
          {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              */
          }
          <input type='text' placeholder='Search by title or author' value={searchText} onChange={this.handleQueryChange}></input>
        </div>
      </div>
      <div className='search-books-results'>
        {(searchText && books.length === 0) && (
          <div className='search-books-info'>No match result</div>
        )}

        {(searchText && books.length > 0) && (
          <div className='search-books-info'>Found {books.length} results</div>
        )}

        {searchText && (
          <BooksGrid books={books} onShelfChange={handleShelfChange} currentPage='search'/>
        )}
      </div>
    </div>)
  }
}

export default SearchBooks

import React from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'

class SearchBooks extends React.Component {

  state = {
    query: '',
    allSearchResults: []
  }

  showSearchResults = (searchText) => {
    BooksAPI.search(searchText)
      .then(this.correctThumbnailAndAuthor)
      .then(this.addShelfPropToExistedBooks)
      .then(results => {
        results.length > 0
        ? this.setState({allSearchResults: results})
        : this.setState({allSearchResults: []})
      })
      .catch(() => this.setState({allSearchResults: []}))
  }

  correctThumbnailAndAuthor = (data) => {
    return new Promise(resolve => {
      data.forEach(book => {
        if (!book.imageLinks) {
          book.imageLinks = []
          book.imageLinks.thumbnail = ''
        }
        if (!book.authors) {
          book.authors = []
        }
      })
      resolve(data)
    })
  }

  addShelfPropToExistedBooks = (data) => {
    const booksInShelf = this.props.books
    return new Promise((resolve) => {
      if (data.length > 0) {
        data.forEach(result => {
          booksInShelf.forEach(book => {
            (book.id === result.id) && (result.shelf = book.shelf)
          })
        })
        resolve(data)
      }
    })
  }

  handleChange = (e) => {
    this.setState({query: e.target.value})
    if (!e.target.value) return
    this.showSearchResults(e.target.value)
  }

  render() {
    const { handleShelfChange } = this.props
    const { query, allSearchResults } = this.state

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
          <input type='text' placeholder='Search by title or author' value={this.state.query} onChange={this.handleChange}></input>
        </div>
      </div>
      <div className='search-books-results'>
        {(query && allSearchResults.length === 0) && (
          <div className='search-books-info'>No match result</div>
        )}

        {(query && allSearchResults.length > 0) && (
          <div className='search-books-info'>Found {allSearchResults.length} results</div>
        )}

        {query && (
          <BooksGrid
            books={this.state.allSearchResults}
            onShelfChange={handleShelfChange}
            currentPage='search'
            />
        )}
      </div>
    </div>)
  }
}

export default SearchBooks

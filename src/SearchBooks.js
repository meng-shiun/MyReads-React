import React from 'react'
import Book from './Book'

class SearchBooks extends React.Component {

  render() {
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
              <input type='text' placeholder='Search by title or author' value={this.props.getQuery} onChange={this.props.searchBooks}></input>
            </div>
          </div>

          <div className='search-books-results'>
            <ol className='books-grid'>
              {/*TODO: update book selected option when change bookShelf on search page*/}
                {this.props.result.map(book => (
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    authors={book.authors}
                    cover={book.imageLinks.thumbnail}
                    shelf={book.shelf}
                    onShelfChange={this.props.handleShelfChange}
                    />
                ))}
              </ol>
            </div>
          </div>
        )
      }
    }

    export default SearchBooks

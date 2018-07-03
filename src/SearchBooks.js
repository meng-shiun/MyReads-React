import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {

  state = {
    query: '',
    results: []
  }

  // TEMP: for testing
  componentDidMount() {
    this.searchBooks()
  }

  // TEMP: for testing
  searchBooks = (e) => {
    BooksAPI.search('React').then( books => {
      this.setState({results: books})
    })
  }
  // TEMP: for testing
  showAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ results: books })
    })
  }
  // TEMP: for testing
  updateBook = (book) => {
    console.log('[SearchBooks] Change shelf to:')
    console.log(book.shelf);
    let bookShelf = book.shelf || 'read'

    BooksAPI.update(book, bookShelf)
  }

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
              <input type='text' placeholder='Search by title or author' value={this.props.query} onChange={this.searchBooks}></input>
            </div>
          </div>

          <div className='search-books-results'>
            <ol className='books-grid'>
              {/*searchBooks.map(book => (
                <Book key={book.id} title={book.title} authors={book.authors} cover={book.cover}/>
                ))*/}
                {this.state.results.map(book => (
                  <Book
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    authors={book.authors}
                    cover={book.imageLinks.thumbnail}
                    shelf={book.shelf}
                    onShelfChange={() => this.updateBook(book)}
                    />
                  /*TODO: REMOVE onShelfChange property*/
                ))}
              </ol>
            </div>
          </div>
        )
      }
    }

    export default SearchBooks

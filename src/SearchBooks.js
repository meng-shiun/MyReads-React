import React from 'react'
import Book from './Book'

const searchBooks = [
  {
    "id": 2,
    "title": "1776",
    "authors": "David McCullough",
    "cover": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
  },
  {
    "id": 3,
    "title": "Harry Potter and the Sorcerer's Stone",
    "authors": "J.K. Rowling",
    "cover": "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
  }
]

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
              <input type='text' placeholder='Search by title or author'></input>
            </div>
          </div>

          <div className='search-books-results'>
            <h3>Search result:</h3>
            <ol className='books-grid'>
              {searchBooks.map(book => (
                <Book key={book.id} title={book.title} authors={book.authors} cover={book.cover}/>
              ))}
            </ol>
          </div>
        </div>
      )
    }
  }

  export default SearchBooks

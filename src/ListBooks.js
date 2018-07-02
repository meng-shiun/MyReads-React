import React from 'react'
import BookShelf from './BookShelf'

const ListBooks = (props) => {
  return (
    <div>
      <div className='list-books'>

        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>

        <div className='list-books-content'>
          <BookShelf title='Currently Reading'/>
          <BookShelf title='Want to Read'/>
          <BookShelf title='Read'/>
        </div>

        <div className='open-search'>
          <a>Add a book</a>
        </div>
      </div>
    </div>
  )
}

export default ListBooks

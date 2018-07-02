import React from 'react'
import BookShelf from './BookShelf'

const ListBooks = (props) => {
  return (
    <div>
      <h2>ListBooks Page</h2>
      <p>ListBooksTitle</p>
      <p>ListBooks Content:</p>
      <BookShelf/>
      <button>OpenSearch</button>
    </div>
  )
}

export default ListBooks

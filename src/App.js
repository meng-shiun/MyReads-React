import React from 'react'
// import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    screen: 'search', //main, search
  }

  render() {
    return(
      <div>
        {this.state.screen === 'main' && (
          // <ListBooks books={this.state.allBooks}/>
          <ListBooks/>
        )}

        {this.state.screen === 'search' && (
          <SearchBooks/>
        )}
      </div>
    )
  }
}

export default BooksApp

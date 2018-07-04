import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    query: '', // Astronomy, Art, Drama, Design, Cook, Games
    allBooks: [], // All books in Main Page
    allSearchResults: [] // All books in Search Page
  }

  componentDidMount() {
    this.showAllBooks()
  }

  showAllBooks = () => {
    BooksAPI.getAll().then( books => {
      this.setState({ allBooks: books })
    })
  }

  handleSearchTextChange = (searchText) => {
    console.log(searchText);
    this.setState({query: searchText})
    this.showSearchResults(searchText)
  }

  showSearchResults = (searchText) => {
    BooksAPI.search(searchText)
    .then(this.addShelfPropToExistedBooks)
    .then( results => this.setState({allSearchResults: results}) )
    .catch( () => this.setState({allSearchResults: []}) )
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.showAllBooks())
  }

  addShelfPropToExistedBooks = (results) => {
    const booksInShelf = this.state.allBooks
    return new Promise( (resolve, reject) => {
      if (results.length > 0) {
        results.forEach( result => {
          booksInShelf.forEach( book => {
            (book.id === result.id) && (result.shelf = book.shelf)
          })
        })
        resolve(results)
      }
      this.setState({allSearchResults: []})
      reject()
    })
  }

  render() {
    return(
      <div>
        <Route exact path='/' render={() => (
            <ListBooks
              books={this.state.allBooks}
              handleShelfChange={this.changeShelf}
              />
          )}/>

          <Route path='/search' render={() => (
              <SearchBooks
                books={this.state.allSearchResults}
                handleShelfChange={this.changeShelf}
                searchText={this.state.query}
                onSearchTextChange={this.handleSearchTextChange}
                />
            )}/>
          </div>
        )
      }
    }

    export default BooksApp

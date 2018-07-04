* App
  * ListBooks - BooksAPI, state
    * (ListBooksTitle)
    * (OpenSearch)
    * (ListBooksContent)
      * BookShelf
        * (BookshelfTitle)
        * BooksGrid (reused)
          * Book

  * SearchBooks - BooksAPI, state
    * (SearchBooksBar)
      * (SearchBooksInput)
      * (CloseSearch)
      * (SearchBooksResult)
      * BooksGrid (reused)
        * Book (reused)

## Bugs:

* Search page doesn't update visually shelf when the book is assigned to another shelf

b) Search results are sometimes shown when all of the text is deleted out of the search input box.
c) Invalid queries are NOT handled and prior search results are not shown.
d) The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").

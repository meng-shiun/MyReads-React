
Component Structure
```bash
|
App  
│
└─── ListBooks
│        └─── BookShelf
│                 └─── BooksGrid
│                         └─── Book
└─── SearchBooks
│        └─── BooksGrid
|                 └─── Book
|
BooksAPI
|
```

* App - BooksAPI, state
  * ListBooks
    * (ListBooksTitle)
    * (OpenSearch)
    * (ListBooksContent)
      * BookShelf
        * (BookshelfTitle)
        * BooksGrid (reused)
          * Book (reused)

  * SearchBooks
    * (SearchBooksBar)
      * (SearchBooksInput)
      * (CloseSearch)
      * (SearchBooksResult)
      * BooksGrid (reused)
        * Book (reused)

## Bugs:
* Search page doesn't update visually shelf when the book is assigned to another shelf
* Prior search results are shown.

## Todo:
* run Build

/*
This script is used to add shelf property and correct lacking thumbnail to a book from BooksAPI
*/
export const correctThumbnailAndAuthor = (data) =>
  new Promise(resolve => {
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

export const addShelfPropToExistedBooks = (data, dataLackShelfProp) =>
  new Promise((resolve) => {
    if (data.length > 0) {
      data.forEach(result => {
        dataLackShelfProp.forEach(book => {
          (book.id === result.id) && (result.shelf = book.shelf)
        })
      })
      resolve(data)
    }
  })

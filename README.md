# MyReads with ReactJS

MyReads is a project for Udacity Front-End Web Developer Nanodegree which aims to practice ReactJS.

The app allows users to perform instant search for books and add them to the shelves.

On main page, users can move books between bookshelves.

## Run the project

* `clone` this repo
* install all project dependencies with `npm install`
* start the development server with `npm start`
* localhost - http://localhost:3000/MyReads-React/
* [live](https://meng-shiun.github.io/MyReads-React/)

## Resources

* `BooksAPI` and starter code are provided by Udacity [reactnd-project-myreads-starter](https://github.com/udacity/reactnd-project-myreads-starter)

## Component Structure

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
ModifyBookAPI
```

## TODO

* Update tag when shelf changes to 'none' or from 'none' to shelf on search page
* Create a route to handle 404 page not found error. This is helpful if someone navigates to routes which don't exist in the APP
* Improve UI/ design
* Run build

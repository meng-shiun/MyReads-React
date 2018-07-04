import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  handleChange = (e) => {
    this.props.onShelfChange(this.props, e.target.value)
  }

  render() {
    const { title, authors, cover, shelf } = this.props
    
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${cover})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={this.handleChange} value={shelf||'none'}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </li>
    )
  }
}

export default Book

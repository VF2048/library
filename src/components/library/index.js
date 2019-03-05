import React from 'react'
import Books from './Books.js'

export default function BooksList({ book }) {
    const bookElements = book.map(books =>
    <li className="book_list"><Books books = {books}/></li>
    )
    return (
        <ul>
            {bookElements}
        </ul>
    )
}
import React from 'react'
import { useSelector } from 'react-redux';





const Cart = () => {

  const books = useSelector((state) => state);

  return (
    books.map((book) => (
      <>
        <ul className="list-disc list-inside bg-white p-4 rounded-lg shadow-md border">
          {books.map((book, index) => (
            <li key={index} className="mb-2 border-b pb-2">
              <span className="font-semibold">{book.title}</span> <br />
              <span className="text-gray-600">{book.author}</span> <br />
              <span className="text-green-500 font-medium">₹{book.price}</span>
            </li>
          ))}
        </ul>
      </>
    ))
  )
}

export default Cart
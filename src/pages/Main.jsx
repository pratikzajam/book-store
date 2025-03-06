import React from 'react'
import Navbar from '../Components/Navbar'
import { add } from '../Redux/action'
import { useSelector, useDispatch } from 'react-redux'


const Main = () => {

    const dispatch = useDispatch();

    const books = [
        { id: 1, title: "Atomic Habits", author: "James Clear", price: 499 },
        { id: 2, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 399 },
        { id: 3, title: "The Alchemist", author: "Paulo Coelho", price: 299 },
        { id: 4, title: "Deep Work", author: "Cal Newport", price: 599 },
        { id: 5, title: "Ikigai", author: "Héctor García", price: 349 }
    ];


    return (

        <>
            <Navbar />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {books.map((book, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">{book.title}</h2>
                            <p className="text-gray-600">{book.author}</p>
                            <p className="text-green-500 font-medium">₹{book.price}</p>
                        </div>

                        <button

                            onClick={() => dispatch(add({ id: book.id, title: book.title, price: book.price }))}
                            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Main
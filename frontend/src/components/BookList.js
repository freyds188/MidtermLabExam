import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks, deleteBook } from '../api'; 

function BookList() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const data = await fetchBooks(); // Fetch books from API
                setBooks(data);
            } catch (error) {
                console.error('Error fetching books:', error);
                setError('Failed to load books. Please try again later.');
            }
        };

        getBooks();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteBook(id); // Call the deleteBook API function
            setBooks((prevBooks) => prevBooks.filter(book => book.id !== id)); // Remove the deleted book from the state
        } catch (error) {
            console.error('Error deleting book:', error);
            setError('Failed to delete book. Please try again.');
        }
    };

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link to={`/view/${book.id}`}>{book.title}</Link> - {book.author}
                        <Link to={`/edit/${book.id}`} style={{ marginLeft: '10px' }}>Edit</Link>
                        <button onClick={() => handleDelete(book.id)} style={{ marginLeft: '10px' }}>Delete</button>
                    </li>
                ))}
            </ul>
            <Link to="/add">Add New Book</Link>
        </div>
    );
}

export default BookList;

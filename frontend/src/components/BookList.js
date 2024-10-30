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
        // Optimistically remove the book from the state
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);

        try {
            await deleteBook(id); // Call the deleteBook API function
        } catch (error) {
            console.error('Error deleting book:', error);
            setError('Failed to delete book. Please try again.'); // Show error message
            // Revert the state back if deletion fails
            setBooks(books);
        }
    };

    return (
        <div className="dashboard">
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="book-list">
                {books.map((book) => (
                    <div key={book.id} className="book-card-link">
                        <Link to={`/view/${book.id}`} className="book-card">
                            <h2>{book.title}</h2>
                            <p>{book.author}</p>
                        </Link>
                        <div className="actions">
                            <Link to={`/edit/${book.id}`}>
                                <button className="edit-button">Edit</button>
                            </Link>
                            <button className="delete-button" onClick={(e) => {
                                e.stopPropagation(); // Prevent the link click event
                                handleDelete(book.id);
                            }}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/add">
                <button className="add-book-button">Add Book</button>
            </Link>
        </div>
    );
}

export default BookList;

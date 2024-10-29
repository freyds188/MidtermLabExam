// src/components/BookForm.js
import React, { useState, useEffect } from 'react';
import { createBook, updateBook, fetchBookById } from '../api'; // Import the API functions

function BookForm({ onSubmit, bookId = null }) {
    const [book, setBook] = useState({ title: '', author: '', published_year: '', genre: '', description: '' });
    const [error, setError] = useState(null);

    useEffect(() => {
        if (bookId) {
            const getBook = async () => {
                try {
                    const data = await fetchBookById(bookId);
                    setBook(data);
                } catch (error) {
                    console.error('Error fetching book:', error);
                }
            };
            getBook();
        }
    }, [bookId]);

    const handleChange = e => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        if (!book.title || !book.author) {
            setError('Title and author are required.');
            return;
        }
        try {
            if (bookId) {
                await updateBook(bookId, book);
            } else {
                await createBook(book);
            }
            onSubmit(); // Call onSubmit passed from parent to refresh or redirect
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input name="title" value={book.title} onChange={handleChange} placeholder="Title" required />
            <input name="author" value={book.author} onChange={handleChange} placeholder="Author" required />
            <input name="published_year" value={book.published_year} onChange={handleChange} placeholder="Year" />
            <input name="genre" value={book.genre} onChange={handleChange} placeholder="Genre" />
            <textarea name="description" value={book.description} onChange={handleChange} placeholder="Description" />
            <button type="submit">{bookId ? 'Update' : 'Add'} Book</button>
        </form>
    );
}

export default BookForm;

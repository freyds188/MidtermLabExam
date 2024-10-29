// src/components/BookDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookById } from '../api'; // Import the API function

function BookDetails() {
    const { id } = useParams(); // Get the book ID from the URL parameters
    const [book, setBook] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getBook = async () => {
            try {
                const data = await fetchBookById(id);
                setBook(data);
            } catch (error) {
                setError('Error fetching book details.');
                console.error(error);
            }
        };

        getBook();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    return book ? (
        <div>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Published Year:</strong> {book.published_year}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Description:</strong> {book.description}</p>
        </div>
    ) : (
        <p>Loading book details...</p>
    );
}

export default BookDetails;

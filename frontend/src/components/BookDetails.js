import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchBookById } from '../api';

function BookDetails() {
    const { id } = useParams();
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
        <div className="book-details">
            <Link to="/"> 
                <button className="back-button">Back to Dashboard</button>
            </Link>
            <div className="book-details-card">
                <h2>{book.title}</h2>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Published Year:</strong> {book.published_year}</p>
                <p><strong>Genre:</strong> {book.genre}</p>
                <p><strong>Description:</strong> {book.description}</p>
            </div>
        </div>
    ) : (
        <p>Loading book details...</p>
    );
}

export default BookDetails;

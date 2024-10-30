import React from 'react';
import { Container, Card } from 'react-bootstrap';
import BookForm from '../components/BookForm';
import { useNavigate } from 'react-router-dom';

function AddBook() {
    const navigate = useNavigate();

    const handleFormSubmit = () => {
        navigate('/');
    };

    return (
        <Container className="mt-4">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Add New Book</Card.Title>
                    <BookForm onSubmit={handleFormSubmit} />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default AddBook;
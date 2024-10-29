import React from 'react';
import { Container, Card } from 'react-bootstrap';
import BookForm from '../components/BookForm';
import { useParams, useNavigate } from 'react-router-dom';

function EditBook() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleFormSubmit = () => {
        navigate('/');
    };

    return (
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>Edit Book</Card.Title>
                    <BookForm onSubmit={handleFormSubmit} bookId={id} />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default EditBook;

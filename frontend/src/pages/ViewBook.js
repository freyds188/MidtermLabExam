import React from 'react';
import { Container, Card } from 'react-bootstrap';
import BookDetails from '../components/BookDetails';

function ViewBook() {
    return (
        <Container className="mt-4">
            <Card>
                <Card.Body>
                    <Card.Title>Book Details</Card.Title>
                    <BookDetails />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ViewBook;

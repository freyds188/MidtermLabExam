import React from 'react';
import { Container, Card } from 'react-bootstrap';
import BookDetails from '../components/BookDetails';

function ViewBook() {
    return (
        <Container className="mt-4">
            <Card className="text-center">
                <Card.Body>
                    <div className="book-details-title">
                        <Card.Title className="mb-4">Book Details</Card.Title>
                    </div>
                    <BookDetails />
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ViewBook;

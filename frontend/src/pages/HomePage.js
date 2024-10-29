import React from 'react';
import { Container } from 'react-bootstrap';
import BookList from '../components/BookList';

function HomePage() {
    return (
        <Container className="dashboard mt-4">
            <h1>Book Management Dashboard</h1>
            <BookList />
        </Container>
    );
}

export default HomePage;

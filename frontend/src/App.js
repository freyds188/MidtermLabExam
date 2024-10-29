import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBook';
import EditBookPage from './pages/EditBook';
import ViewBookPage from './pages/ViewBook';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add" element={<AddBookPage />} />
                <Route path="/edit/:id" element={<EditBookPage />} />
                <Route path="/view/:id" element={<ViewBookPage />} />
            </Routes>
        </Router>
    );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthorList from './pages/AuthorList';
import AuthorForm from './pages/AuthorForm';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthorList />} />
                <Route path="/new" element={<AuthorForm />} />
                <Route path="/edit/:id" element={<AuthorForm />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;

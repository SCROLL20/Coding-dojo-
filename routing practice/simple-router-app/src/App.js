// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = () => {
    return <h1>Welcome</h1>;
};

const NumberDisplay = ({ params }) => {
    const number = params.number;
    return <h1>{number}</h1>;
};

const WordDisplay = ({ params }) => {
    const word = params.word;
    return <h1>{word}</h1>;
};

const ColorfulWordDisplay = ({ params }) => {
    const { word, color1, color2 } = params;
    const style = {
        color: color1,
        backgroundColor: color2,
        padding: '10px',
        borderRadius: '5px',
    };
    return <h1 style={style}>{word}</h1>;
};

const NotFound = () => {
    return <h1>404 - Not Found</h1>;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/:number" element={<NumberDisplay />} />
                <Route path="/:word" element={<WordDisplay />} />
                <Route path="/:word/:color1/:color2" element={<ColorfulWordDisplay />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;
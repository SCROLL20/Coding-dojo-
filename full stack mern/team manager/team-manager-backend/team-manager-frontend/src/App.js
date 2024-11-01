import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './PlayerList';
import AddPlayer from './AddPlayer';
import PlayerStatus from './playerstatus'; // If you have this component

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PlayerList />} />
                <Route path="/add-player" element={<AddPlayer />} />
                <Route path="/players/:id" element={<PlayerStatus />} />
            </Routes>
        </Router>
    );
};

export default App;
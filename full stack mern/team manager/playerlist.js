import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const fetchPlayers = async () => {
            const response = await axios.get('http://localhost:5000/players');
            setPlayers(response.data);
        };
        fetchPlayers();
    }, []);

    const deletePlayer = async (id) => {
        if (window.confirm('Are you sure you want to delete this player?')) {
            await axios.delete(`http://localhost:5000/players/${id}`);
            setPlayers(players.filter(player => player._id !== id));
        }
    };

    return (
        <div>
            <h1>Player List</h1>
            <Link to="/add-player">Add Player</Link>
            <ul>
                {players.map(player => (
                    <li key={player._id}>
                        {player.name} - {player.status.join(', ')}
                        <button onClick={() => deletePlayer(player._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlayerList;
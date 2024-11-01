import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddPlayer = () => {
    const [name, setName] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/players', { name });
            history.push('/');
        } catch (error) {
            console.error('Error adding player:', error);
        }
    };

    return (
        <div>
            <h1>Add New Player</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Player Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Player</button>
            </form>
        </div>
    );
};

export default AddPlayer;
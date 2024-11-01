// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles.css'; // Optional: Import CSS for styling

const App = () => {
    const [pokemonNames, setPokemonNames] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPokemon = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
            const names = response.data.results.map(pokemon => pokemon.name);
            setPokemonNames(names);
        } catch (error) {
            console.error('Error fetching Pokémon:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Pokémon Fetcher</h1>
            <button onClick={fetchPokemon} disabled={loading}>
                {loading ? 'Fetching...' : 'Fetch Pokémon'}
            </button>
            <div className="pokemon-list">
                {pokemonNames.length > 0 && (
                    <ul>
                        {pokemonNames.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default App;
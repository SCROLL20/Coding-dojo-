// src/PokemonFetcher.js
import React, { useState } from 'react';
import axios from 'axios';

const PokemonFetcher = () => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemon = async () => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      const names = response.data.results.map(pokemon => pokemon.name);
      setPokemonNames(names);
    } catch (err) {
      setError('Failed to fetch Pokémon');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Pokémon Fetcher</h1>
      <button onClick={fetchPokemon}>Fetch Pokémon</button>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {pokemonNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonFetcher;
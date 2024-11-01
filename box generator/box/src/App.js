// src/App.js
import React, { useState } from 'react';
import './styles.css'; // Optional: Import CSS for styling

function App() {
    const [color, setColor] = useState('');
    const [size, setSize] = useState(100); // Default size
    const [boxes, setBoxes] = useState([]);

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (color) {
            setBoxes([...boxes, { color, size }]);
            setColor(''); // Clear the color input
            setSize(100); // Reset size to default
        }
    };

    return (
        <div>
            <h1>Create Your Color Box</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Color:</label>
                    <input
                        type="text"
                        value={color}
                        onChange={handleColorChange}
                        placeholder="Enter a color"
                    />
                </div>
                <div>
                    <label>Size (px):</label>
                    <input
                        type="number"
                        value={size}
                        onChange={handleSizeChange}
                        placeholder="Enter size in pixels"
                    />
                </div>
                <button type="submit">Add Box</button>
            </form>

            <div className="box-container">
                {boxes.map((box, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: box.color,
                            width: `${box.size}px`,
                            height: `${box.size}px`,
                            display: 'inline-block',
                            margin: '10px',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
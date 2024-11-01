// src/App.js
import React, { useState } from 'react';
import './styles.css'; // Import CSS for styling

const Tab = ({ label, isActive, onClick }) => {
    return (
        <div
            className={`tab-header ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {label}
        </div>
    );
};

const Tabs = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleTabClick = (index, callback) => {
        setActiveIndex(index);
        if (callback) {
            callback();
        }
    };

    return (
        <div className="tabs">
            <div className="tab-headers">
                {items.map((item, index) => (
                    <Tab
                        key={index}
                        label={item.label}
                        isActive={index === activeIndex}
                        onClick={() => handleTabClick(index, item.callback)}
                    />
                ))}
            </div>
            <div className="tab-content">
                <div className="content">
                    {items[activeIndex].content}
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const tabItems = [
        {
            label: 'Tab 1',
            content: <div>This is the content of Tab 1.</div>,
            callback: () => console.log('Tab 1 clicked'),
        },
        {
            label: 'Tab 2',
            content: <div>This is the content of Tab 2.</div>,
            callback: () => console.log('Tab 2 clicked'),
        },
        {
            label: 'Tab 3',
            content: <div>This is the content of Tab 3.</div>,
            callback: () => console.log('Tab 3 clicked'),
        },
    ];

    return (
        <div className="App">
            <h1>Tabs Component</h1>
            <Tabs items={tabItems} />
        </div>
    );
};

export default App;
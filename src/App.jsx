import React, { useState, useEffect } from 'react';
import omnieData from "./omnie";
import './App.css';

function App() {
  const [omnie, setOmnie] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    setOmnie(omnieData);
  }, []);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div id="app">
    <div id="container">
      <nav>
        {omnie.map((category) => (
          <div className="categoryContainer" key={category.category}>
            <h2 className="categoryTitle">{category.category}</h2>
            <button className={activeCategory === category.category ? 'activeButton' : ''} 
            onClick={() => toggleCategory(category.category)}>
              {activeCategory === category.category ? 'pokaż mniej' : 'pokaż więcej'}
            </button>
          </div>
        ))}
      </nav>
      {omnie.map((category) => (
        activeCategory === category.category && (
          <div className="section" id={category.category}>
            <div className='content'>
              {category.content.map((item, idx) => (
                <div className="item" key={idx}>{item}</div>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
    </div>
  );
}

export default App;

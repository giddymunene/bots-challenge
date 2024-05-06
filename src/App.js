import React, { useState } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import SortBar from './components/SortBar';

const App = () => {
  const [selectedBot, setSelectedBot] = useState(null);
  const [myArmy, setMyArmy] = useState([]);

  const addToArmy = (bot) => {
    setMyArmy(prevArmy => [...prevArmy, bot]);
  };

  return (
    <div>
      <h1>My Army</h1>
      <div className="my-army">
        {selectedBot && (
          <div className="selected-bot">
            <p>{selectedBot.name}</p>
            <p>Class: {selectedBot.bot_class}</p>
            {/* Render other bot details */}
          </div>
        )}
      </div>
      <SortBar />
      <BotCollection addToArmy={addToArmy} />
    </div>
  );
};

export default App;

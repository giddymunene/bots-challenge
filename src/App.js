import React, { useState } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import SortBar from './components/SortBar';

const App = () => {

  const [myArmy, setMyArmy] = useState([]);
  const [filteredBots, setFilteredBots] = useState([]);

  

  const addToArmy = (bot) => {
    setMyArmy(prevArmy => [...prevArmy, bot]);
  };

  const handleSortChange = (selectedClass) => {
    if (selectedClass === "") {
      setFilteredBots(myArmy);
    } else {
      const filtered = myArmy.filter(bot => bot.bot_class === selectedClass);
      setFilteredBots(filtered);
    }
  };
  
  return (
    <div>
      <h1>My Army</h1>
      <SortBar onSortChange={handleSortChange} />
      <BotCollection addToArmy={addToArmy} filteredBots={filteredBots} />
      
    </div>
  );
};

export default App;

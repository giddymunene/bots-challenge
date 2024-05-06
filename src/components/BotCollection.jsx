import React, { useState, useEffect } from 'react';

const BotCollection = ({addToArmy}) => {
const [bots, setData] = useState([]);
const [selectedBots, setSelectedBots] = useState([]);

useEffect(() => {
const fetchData = async () => {
try {
const response = await fetch('https://json-server-2-11m6.onrender.com/bots'); 
const bots = await response.json();
setData(bots);
} catch (error) {
console.error('Error fetching data:', error);
}
};

fetchData();
}, []);


const handleAddToArmy = () => {
  selectedBots.forEach(bot => addToArmy(bot));
  setSelectedBots([]);
};

const handleDelete = (botId) => {
  setData(prevBots => prevBots.filter(bot => bot.id !== botId));
};


return (
<div>
<h2>Bot Collection</h2>
<div className="card-container mx-auto">
{bots.map(bot => (
<div key={bot.id} className="card">
<h3>{bot.name}</h3>
<img src={bot.avatar_url} alt={bot.name} />
<p>Health: {bot.health}</p>
<p>Damage: {bot.damage}</p>
<p>Armor: {bot.armor}</p>
<p>Class:{bot.bot_class}</p>
<button className='btn btn-primary mx-auto' onClick={() =>handleAddToArmy(bot.id)}>Add to My Army</button>

<button className='btn btn-danger mx-auto' onClick={() => handleDelete(bot.id)}>X</button>

</div>
))}
</div>
</div>
);
}

export default BotCollection;


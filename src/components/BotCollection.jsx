import React, { useState, useEffect } from 'react';

const BotCollection = ({Bots}) => {
const [bots, setData] = useState([]);

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

const handleClick = (bot) => {
addToArmy(bot);
};
function addToArmy(){
}
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
<button onClick={() => handleClick(bot)}>Add to My Army</button>

<button className="btn btn-sm btn-danger mx-auto" onClick>X</button>

</div>
))}
</div>
</div>
);
}

export default BotCollection;


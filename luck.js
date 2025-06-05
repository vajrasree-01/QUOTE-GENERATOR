import React, { useState } from 'react';

const LuckGenerator = () => {
  const [message, setMessage] = useState('');

  const luckMessages = [
    "Today is your lucky day!",
    "A surprise is waiting for you.",
    "Good fortune is coming your way.",
    "Be cautious — luck favors the prepared.",
    "You will find what you're looking for.",
    "Take a chance today!",
    "Someone is thinking of you fondly.",
    "You will ace your next challenge!"
  ];

  const generateLuck = () => {
    const randomIndex = Math.floor(Math.random() * luckMessages.length);
    setMessage(luckMessages[randomIndex]);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>🍀 Luck Generator 🍀</h2>
      <button onClick={generateLuck} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Generate Luck
      </button>
      {message && <p style={{ marginTop: '20px', fontSize: '18px', color: 'green' }}>{message}</p>}
    </div>
  );
};

export default LuckGenerator;
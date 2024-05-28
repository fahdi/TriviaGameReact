"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the score
    const response = await fetch('/api/submit-score', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, score: 100 }), // example score
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const response = await fetch('/api/leaderboard');
      const data = await response.json();
      setLeaderboard(data);
    };
    fetchLeaderboard();
  }, []);

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Mythology Trivia Game</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Start Game
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
          <ul>
            {leaderboard.map((item, index) => (
                <li key={index} className="mb-2">
                  {item.username}: {item.score}
                </li>
            ))}
          </ul>
        </div>
      </div>
  );
}

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then(res => res.json())
      .then(data => {
        const sorted = data.sort((a, b) => b.Points - a.Points);
        setTeams(sorted);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2 className="loading-text">Loading IPL Data...</h2>;

  return (
    <div className="container">
      <h1>IPL 2022 Points Table</h1>
      <table className="ipl-table">
        <thead>
          <tr>
            <th>Team</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{team.Team}</td>
              <td className="nrr-column">{team.NRR}</td>
              <td className="points-column">{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

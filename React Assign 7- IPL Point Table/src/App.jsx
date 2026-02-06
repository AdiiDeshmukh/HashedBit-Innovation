import React, { useState, useEffect } from 'react';

function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then(res => res.json())
      .then(data => {
        // Sort Ascending by NRR
        const sorted = data.sort((a, b) => a.NRR - b.NRR);
        setTeams(sorted);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading IPL Data...</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>IPL 2022 Points Table</h1>
      <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
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
              <td>{team.NRR}</td>
              <td>{team.Points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
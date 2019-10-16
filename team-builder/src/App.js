import React, {useState} from 'react';
import TeamList from "./components/TeamList";
import './App.css';

const data = [{
  id: 0,
  name: "Tom",
  email: "tom@tom.com",
  role: "Backend Engineer"
}]

function App() {
  const [team, setTeam] = useState(data);
  return (
    <div className="App">
      {team.map(member => (
        <TeamList 
          key={member.id}
          name={member.name}
          email={member.email}
          role={member.role}/>
      ))}
    </div>
  );
}

export default App;

import React, {useState} from 'react';
import TeamList from "./components/TeamList";
import Form from "./components/Form";
import './App.css';

const data = [{
  id: Date.now(),
  name: "Tom",
  email: "tom@tom.com",
  role: "Backend Engineer"
}]

function App() {
  const [team, setTeam] = useState(data);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeam([...team, newMember]);
  }

  return (
    <div className="App">
      {team.map(member => (
        <TeamList 
          key={member.id}
          name={member.name}
          email={member.email}
          role={member.role}/>
      ))}
      <Form addNewMember={addNewMember}/>
    </div>
  );
}

export default App;

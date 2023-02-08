import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', ph: '040-123456' },
    { name: 'Ada Lovelace', ph: '39-44-5323523' },
    { name: 'Dan Abramov', ph: '12-43-234345' },
    { name: 'Mary Poppendieck', ph: '39-23-6423122' },
  ]);
  const [newName, setNewName] = useState('');
  const [newPh, setNewPh] = useState('');
  const [newFilter, setNewFilter] = useState('');
  const handleNoteChange1 = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNoteChange2 = (event) => {
    console.log(event.target.value);
    setNewPh(event.target.value);
  };

  const handleFilter = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  };
  const addPerson = (event) => {
    // below line is prevent page refresh
    event.preventDefault();
    const alreadyExists = persons.find((person) => person.name === newName);
    if (alreadyExists) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        ph: newPh,
      };
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewPh('');
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={newFilter} onChange={handleFilter} />
      </div>
      <h2>Add a new</h2>

      <Form
        handleFilter={handleFilter}
        handleNoteChange1={handleNoteChange1}
        handleNoteChange2={handleNoteChange2}
        addPerson={addPerson}
        newName={newName}
        newPh={newPh}
      />
      <h2>Numbers</h2>
      <Filter persons={persons} newFilter={newFilter} />
    </div>
  );
};
const Form = ({
  handleFilter,
  handleNoteChange1,
  handleNoteChange2,
  addPerson,
  newName,
  newPh,
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNoteChange1} />
      </div>
      <div>
        number: <input value={newPh} onChange={handleNoteChange2} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};
const Filter = ({ persons, newFilter }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );
  return (
    <div>
      {' '}
      {filteredPersons.map((person) => (
        <p>
          {person.name} {person.ph}
        </p>
      ))}{' '}
    </div>
  );
};

export default App;

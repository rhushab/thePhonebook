import { useEffect, useState } from 'react';
import personService from './services/persons';

const App = () => {
  useEffect(
    () =>
      personService
        .getAll()
        .then((initialPersons) => setPersons(initialPersons)),
    []
  );
  const [persons, setPersons] = useState([]);
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

  const deletePerson = (id) => {
    const filteredPerson = persons.filter((person) => person.id === id);
    const personName = filteredPerson[0].name;
    const personId = filteredPerson[0].id;
    if (window.confirm(`Delete ${personName} ?`)) {
      personService.del(personId);
      console.log(`${personName} successfully deleted`);
      setPersons(persons.filter((person) => person.id !== personId));
    }
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
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewPh('');
      });
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
      <Filter
        persons={persons}
        newFilter={newFilter}
        deletePerson={deletePerson}
      />
    </div>
  );
}; //app ends
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
}; //form ends
const Filter = ({ persons, newFilter, deletePerson }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(newFilter.toLowerCase())
  );
  return (
    <div>
      {' '}
      {filteredPersons.map((person) => (
        <p>
          {person.name} {person.ph}
          <p>
            <button onClick={() => deletePerson(person.id)}>delete</button>
          </p>
        </p>
      ))}{' '}
    </div>
  );
};
export default App;

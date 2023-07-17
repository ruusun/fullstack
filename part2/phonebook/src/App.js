
import { useState, useEffect } from 'react'
import FilterComponent from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Person from './components/Person.js'
import Notification from './components/Notification.js'
import personsService from './services/persons.js'
import './index.css'


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [newMessage, setNewMessage] = useState(null)

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addNew = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    if (!persons.map(persons=>persons.name).includes(nameObject.name)){
      personsService
      .create(nameObject)
      .then(initialPerson=> {
        setPersons(persons.concat(initialPerson))
      })
      .then(setNewMessage(`New person added`))
      }
    else if (window.confirm(`Do you want to change the number of ${nameObject.name}?`)){
      const personToChange = persons.find(n=>n.name === nameObject.name)
      personsService
      .changeNumber(personToChange.id, nameObject)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== personToChange.id ? person : returnedPerson))
      })
      .then(setNewMessage("Number changed"))
      .catch(error=>{
        setNewMessage(`Information of ${nameObject.name} has already been removed`)
    })
    }
    setNewName('')
    setNewNumber('')
    setTimeout(()=>{setNewMessage(null)}, 5000)
  }

  const deleteName = (personTodelete) => {
    if (window.confirm(`Are you sure you want to delete ${personTodelete.name}`)){
    personsService
    .deletePerson(personTodelete.id)
    .then(res=>{
      const del = persons.filter(person=> personTodelete.id !== person.id)
      setPersons(del)})
      .then(setNewMessage(`Person deleted`))
      setTimeout(()=>{setNewMessage(null)}, 5000)
    }
  }

  const namesToShow = persons.filter(person=>person.name.toLowerCase().includes(newFilter))

  const addNewFilter = (event) =>{
    event.preventDefault()
    setNewFilter(newFilter)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>

      <h1>Phonebook</h1>
      <Notification message={newMessage} />
      <FilterComponent addNewFilter={addNewFilter} newFilter={newFilter} handleFilterChange={handleFilterChange}/>
      
      <h2>Add a new</h2>
      <PersonForm 
      addNew={addNew} 
      newName={newName} 
      handleNameChange={handleNameChange} 
      newNumber={newNumber} 
      handleNumberChange={handleNumberChange} 
      />
  
      <h2>Numbers</h2>
      <ul>
      <ul>
      {namesToShow.map(person =>
       <Person
       key={person.name}
       person={person} 
       deleteName={()=>deleteName(person)}
       />
    )}
    </ul>
    </ul>
    </div>
  )
}

export default App
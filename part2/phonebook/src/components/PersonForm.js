const PersonForm = (props) => {
    return (
    <form onSubmit={props.addNew}>
          <div>Name: <input value={props.newName} onChange={props.handleNameChange} /></div>
          <div>Number: <input value={props.newNumber} onChange={props.handleNumberChange} /></div>
          <div>
            <button type="submit">Add new</button>
          </div>
        </form> 
    )
  }

  export default PersonForm
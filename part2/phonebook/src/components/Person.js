
const Person = ({person, deleteName}) => {
    return(
        <li>
        {person.name} {person.number}
        <button onClick={deleteName}>delete</button>
        </li>  
    )
  }

  export default Person
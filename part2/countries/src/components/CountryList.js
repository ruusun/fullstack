const CountryList = ({countriesToReturn})=>{
    return(
<div>
        <ul>
        {countriesToReturn.map(c => (
            <li key={c.name.common}>
             {c.name.common}
             </li>))}
             </ul>
        </div>
    )
}

export default CountryList
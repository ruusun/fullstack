import CountryList from "./CountryList.js"
import singleCountry from "./SingleCountry.js"


const CountryComponent = ({countriesToShow}) => {
    let countriesToReturn=countriesToShow

    if (countriesToShow.length>10){
        return(
        <div>Too many matches, spesify another filter</div>
        )
    }

    else if (countriesToReturn.length===1){
        return singleCountry(countriesToReturn[0])
    }
    
    else return (
        CountryList({countriesToReturn})
    )
    }

    export default CountryComponent
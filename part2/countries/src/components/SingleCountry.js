const singleCountry = (country) => {
        return (
            <div>
                <h1>{country.name.common}</h1>
                <div>capital {country.capital}</div>
                <div>area {country.area}</div>
                <h2>languages</h2>
                <ul>
            {Object.values(country.languages).map(
                l=>(<li key={l}>{l}</li>)
                    )}
             </ul>
             <div>{country.flag}</div>
            </div>
        )
            }

        export default singleCountry
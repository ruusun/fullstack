
import { useState, useEffect } from 'react'
import axios from 'axios'
import FilterComponent from './components/Filter.js'
import CountryComponent from './components/CountriesComponent.js'

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const App = () => {
  const [countries, setCountriesToShow] = useState([])
  const [newFilter, setNewFilter] = useState("")

  useEffect(() => {
      getAll()
      .then(initialCountries => {
        setCountriesToShow(initialCountries)
      })
  }, [])

  const addNewFilter = (event) =>{
    event.preventDefault()
    setNewFilter(newFilter)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const countriesToShow = () => {
    return countries.filter(c=>c.name.common.toLowerCase().includes(newFilter.toLowerCase()))
  } 
  return (
    <div>
      <FilterComponent 
      addNewFilter={addNewFilter} 
      newFilter={newFilter} 
      handleFilterChange={handleFilterChange}
      />
    <div>
      <CountryComponent
       countriesToShow={countriesToShow()}
        />
    </div>
    </div>
  )
}

export default App
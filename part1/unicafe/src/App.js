import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const StatisticLine = ({ text, value }) => (
  <td>
 {text}: {value}
  </td>
)

const Statistics = (props) => {
  const average=(props.good+props.bad)/props.all
  const positive=100*props.good/props.all + "%"
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
    <tbody>
      <tr><StatisticLine text="good" value ={props.good} /></tr>
      <tr><StatisticLine text="neutral" value ={props.neutral} /></tr>
      <tr><StatisticLine text="bad" value ={props.bad} /></tr>
      <tr><StatisticLine text="average" value ={average} /></tr>
      <tr><StatisticLine text="positive" value ={positive} /></tr>
    </tbody>
    </table>
  )
}

const App = () => {

  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    setAll(all + 1)
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setAll(all + 1)
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setAll(all + 1)
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      
      <h2>Statistics</h2>
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  )
}

export default App
const express = require('express')
const app = express()
const morgan=require("morgan")
const cors = require('cors')

function customMorganFormat(tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms',
    JSON.stringify(req.body)
  ].join(' ');
}

app.use(cors())
app.use(express.json())
app.use(morgan(customMorganFormat))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "123"
  },
  {
    id: 2,
    name: "Person 2",
    number: "23456"
  },
  {
    id: 3,
    name: "Person 3",
    number: "23455"
  }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})


app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

  else if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }

  else if (persons.map(p=>p.name).includes(body.name)) {
    return response.status(400).json({ 
      error: 'name must be unique' 
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.random(1000),
  }

  persons = persons.concat(person)

  response.json(person)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(p => p.id === id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).end()
  }

})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(p => p.id !== id)

  response.status(204).end()
})


app.get('/info', (request, response) => {
  const number = persons.length
  const now = Date();
  if (now && number) {
    response.json(`Phonebook has info for ${number} people ${now}`);
  } else {
    response.status(404).end()
  }
  })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
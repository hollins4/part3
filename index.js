const express = require('express')
const app = express()
var morgan = require('morgan')
const cors = require('cors')

app.use(express.static('build'))
app.use(cors())

app.use(express.json())


app.use(morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    JSON.stringify(req.body)
  ].join(' ')
}))



let persons = [
  { 
    "id": 1,
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": 2,
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": 3,
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": 4,
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

  app.get('/', (request, response) => {
      response.send('<h1>Hello World!</h1>')
  })

  app.get('/api/persons', (request, response) => {
      response.json(persons)
  })

  app.get('/info', (request, response) => {


    const info = {
      numOfPeople: persons.length,
      date: new Date()
    }
    const body =  `<div>Phonebook has info for ${info.numOfPeople} people
    <p>${info.date}</p></div>`

    response.send(body)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find( p => p.id === id)
    response.json(person)

  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter( p => p.id !== id)

    response.status(204).end()
  })

  const generateId = () => {
    return Math.round(Math.random() * 100000)
  }

  app.post('/api/persons', (request, response) => {
    const body = request.body
    

    if (!body.name) {
      return response.status(400).json({
        error: "No name"
      })
    } else if (!body.number) {
      return response.status(400).json({
        error: "No number"
      })
    }

    const doesNameExist = persons.some(p => p.name === body.name)
    if (doesNameExist) {
      return response.status(400).json({
        error: 'name must be unique' 
      })
    }

    const person = {
      "id": generateId(),
      "name" : body.name,
      "number": body.number
    }

    persons = persons.concat(person)
    
    response.json(person)
    //response.status(200).end()
  })

  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })
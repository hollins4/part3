const mongoose = require('mongoose')




if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: mode mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = 
    `mongodb+srv://fullstack:${password}@cluster0.xgigt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(url)
/*
const personSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: String,
})


  
const Person = mongoose.model('Person', personSchema)

if (process.argv.length >= 5) {
    const name = process.argv[3]
    const number = process.argv[4]

    const newPerson = new Person({
        "name": name, 
        "number": number
    })

    newPerson.save().then(results => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
        process.exit(1)
    })
    
}

if (process.argv.length === 3) {
    Person.find({}).then( result => {

        if (result.length === 0) {
            
            const persons = [
                new Person({
                    "name": "Arto Hellas", 
                    "number": "040-123456"
                }),
                new Person({
                    "name": "Ada Lovelace", 
                    "number": "39-44-5323523"
                }),
                new Person({
                    "name": "Dan Abramov", 
                    "number": "12-43-234345"
                }),
                new Person({
                    "name": "Mary Poppendieck", 
                    "number": "39-23-6423122"
                })
            ]
            
            persons.forEach( (person, item) => person.save().then(result => {
                console.log('person saved!')
                if (item === persons.length - 1)
                    mongoose.connection.close()
            }))
            
        } 

        console.log("Phonebook:")
        result.forEach(person => {
            console.log(person.name, person.number)
            mongoose.connection.close()
        })
        

    })
}

*/


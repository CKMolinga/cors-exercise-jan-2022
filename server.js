const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
PORT = process.env.PORT

const Database = {}
const students = [
    {
        id: 1,
        name: "Melly Dury",
        age: 54,
        sex: 'F',
        location: "England",
        program: "Msc. Commentary"
    },
    {
        id: 2,
        name: "Judas Iscariot",
        age: 25,
        sex: 'M',
        location: "Egypt",
        program: "Msc. Betrayal"
    },
    {
        id: 3,
        name: "John Doe",
        age: 23,
        sex: 'M',
        location: "U.S.A",
        program: "Msc. PlaceHolding"
    },
    {
        id: 4,
        name: "Ada Lovelace",
        age: 19,
        sex: 'F',
        location: "U.S.A",
        program: "Msc. Programming"
    },
]

Database.students = students;

app.get('/', (req, res) => res.json({ welcome: 'Welcome to our site' }))
app.get('/api/students', cors(), (req, res) => {
    if (req.query.limit) {
        res.json({ students: Database.students.slice(0, req.query.limit) });
    }
    res.json({ students: Database.students });
});
app.get('/api/student/:id', (req, res) => {
    if (req.params.id) {
        res.json({
            students: Database.students.filter((student) => {
                return student.id === parseInt(req.params.id)
            })
        });
    }
    res.json({ students: {} });
})
app.listen(PORT, () => `App running on http://localhost:${PORT}`)
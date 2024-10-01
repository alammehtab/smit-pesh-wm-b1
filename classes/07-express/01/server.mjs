import express from 'express'

const PORT = 3000
const app = express()
app.use(express.json());

// mimicing actual db
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
]

// fetch all users
app.get('/api/users', (req, res) => {
    res.status(200).json({ message: 'Fetched all users!', data: users })
})

// create new user
app.post('/api/users', (req, res) => {
    const body = req.body;

    const newUser = {
        id: users.length + 1,
        ...body
    }

    users.push(newUser)
    res.status(201).json({ message: 'New user created!', data: newUser })
})

// update user
app.put('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const userIndex = users.findIndex(user => user.id === userId)

    if (userIndex !== -1) {
        const updatedUser = { ...users[userIndex], ...req.body }

        // update user in array
        users[userIndex] = updatedUser
        res.status(200).json({ message: `User with id ${userId} updated 😊`, updatedUser })
    } else {
        res.status(404).json({ message: `User with id ${userId} not found 😢` })
    }
})

// delete user
app.delete('/api/users/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const userIndex = users.findIndex(user => user.id === userId)

    if (userIndex !== -1) {
        // remove user from array
        // const deletedUser = users.splice(userIndex, 1)
        users.splice(userIndex, 1)
        res.status(200).json({ message: `User with id ${userId} deleted 😊` })
    } else {
        res.status(404).json({ message: `User with id ${userId} not found 😢` })
    }
})


app.listen(PORT, () => {
    console.log(`Server is listening here: http://localhost:${PORT}`)
})
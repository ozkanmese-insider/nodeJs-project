const express = require('express')
const app = express()

app.use(express.json())
app.listen(8000, () => {
    console.log('listening on port 8000')
})

var contacts = [
    {
        id: "1",
        name: "ozkan"
    }
]

app.get('/contact', (req, res) => {
    res.send({
        success: true,
        message: 'Contact successfully is sent',
        data: contacts
    });
})

app.post('/contact', (req, res) => {
    var name = req.body.name
    
    if (name) {
        contacts.push({
            id: (contacts.length + 1).toString(),
            nane: name
        })
    
        res.send({
            success: true,
            message: 'Contact successfully is added'
        })
    } else {
        res.send({
            success: false,
            message: 'Contact successfully is not added'
        })
    }
})

app.delete('/contact/:id', (req, res) => {
    var id = req.params.id
    var newContacts = contacts.filter(contact => contact.id !== id)

    contacts = newContacts

    res.send({
        success: true,
        message: 'Contact successfully removed'
    })
})

app.put('/contact/:id', (req, res) => {
    var id = req.params.id
    var name = req.body.name

    if (name) {
        var index = contacts.findIndex(contact => contact.id === id)

        contacts[index] = {
            ...contacts[index],
            name: name
        }
    
        res.send({
            success: true,
            message: 'Contact successfully updated'
        })
    } else {
        res.send({
            success: false,
            message: 'Contact successfully is not added'
        })
    }

})
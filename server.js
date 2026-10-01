import express from 'express'

const servidor = express()
servidor.use(express.json())

const pokedex = []

servidor.get('/pokedex', (req, res) => {
    res.send(pokedex)
})

servidor.post('/pokedex', (req, res) => {
    const pokemon = req.body
    pokedex.push(pokemon)

    res.send('pokemon cadastrado!')
})

servidor.listen(6767)

import express from 'express'
import cors from 'cors'

const servidor = express()
servidor.use(express.json())
servidor.use(cors())

const pokedex = []

servidor.get('/pokedex', (req, res) => {
    res.send(pokedex)
})

servidor.post('/pokedex', (req, res) => {
    const pokemon = req.body
    pokedex.push(pokemon)

    res.send('pokemon cadastrado!')
})

servidor.listen(3000, () => {console.log('deu bom')})

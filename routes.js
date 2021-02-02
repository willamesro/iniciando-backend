const express = require('express')
const routes = express.Router()
const movies = require('./data')


routes.get('/', (req, res) => {
    const data = {
        avatar_url:'https://avatars.githubusercontent.com/u/58307770?s=460&u=dac6d2843dc53f6112fe7c862ebc2ea1fa099f42&v=4',
        name: 'Willames Alves',
        role:'Analista de Sistema - IFTO',
        description: 'Formado em tecnológia, análise e desenvolvimento de sistemas pelo Instituto Federal de Educação, Ciências e Tecnológia do Tocantins - Campus Araguaína     <a href="http://www.ifto.edu.br/araguaina">IF-TO</a> ',
        links:[
        {name:'Github', url:'https://github.com/willamesro' },
        {name:'Twitter', url:'https://twitter.com/login?lang=pt'},
        {name:'LinkedIn', url:'https://br.linkedin.com/'}]
    }
    return res.render('about', {info: data})

})

routes.get('/portfolio', (req, res) => {
    
    return res.render('portfolio', { itens: movies })
})

routes.get('/video', (req, res) => {
    const id = req.query.id

    const video = movies.find(v => v.id == id)

    if(!video){
        return res.send('video not found')
    }
    return res.render('movie',{item:video})
})

module.exports = routes
const express = require('express')
const hbs = require('hbs', )
const path = require('path')

const app = express() 

const port = process.env.PORT || 3000

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

app.set('view engine', 'hbs') 
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.json() )
app.use(express.static(publicDirectoryPath))

app.get('', async (req, res) => {
    res.render('start_page', {
        title: 'Julien Palliere'
    }) 
})
app.get('/about', async(req, res) => {
    res.render('short_about')
})
app.get('/CV', async(req, res) => {
    res.render('CV')
})
app.get('/projects', async(req, res) => {
    res.render('projects')
})
app.get('/credit', async(req, res) => {
    res.render('credit')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
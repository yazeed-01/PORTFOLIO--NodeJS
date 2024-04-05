const express = require('express')
const app = new express()
app.use(express.static('public'))
const path = require('path')
const ejs = require('ejs')
app.set('view engine','ejs')
const mongoose = require('mongoose')
const contactPost = require('./models/ContactMePost')
mongoose.connect('mongodb://localhost/portfolio', {useNewUrlParser: true});
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.get('/',(req,res)=>{
        res.render('index');
})
app.get('/about',(req,res)=>{
        res.render('about');
        })
app.get('/contact',(req,res)=>{
        res.render('contact')
        })

        app.post('/contact/store', async (req,res)=>{
        await contactPost.create(req.body)
        res.redirect('/')

        })









app.listen(4000, ()=>{
    console.log('App listening on port 4000')
    })
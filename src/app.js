const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const path=require('path')

//settings

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname,'./views'))
app.engine('html',require('ejs').renderFile)
app.set('view engine','html')

//middlewares

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//fails statics
app.use(express.static('.'))
app.use('/views',express.static(path.join(__dirname,'./views')))
app.use('/styles',express.static(path.join(__dirname,'./views/styles')))
app.use('/bootstrap',express.static(path.join(__dirname,'../node_modules/bootstrap/dist/js')))

//routes

app.use('/',require('./models/indexRouter'))

//server
const puerto=app.get('port')
app.listen(puerto,()=>{
    console.log('server on port ' +puerto)
})

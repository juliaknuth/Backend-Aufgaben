import express from 'express'
import bodyParser from 'body-parser'
import indexController from  './index'
import lebenslaufController from  './lebenslauf'
import stylesController from './styles'
import contactController from './contact-save'
import contactStartController from './contact'
import apiRoutes from './api'

const server = express()
server.use(bodyParser.urlencoded({extended: true}))

  server.use('/Produkte', apiRoutes)

  server.get('/', indexController)

  server.get('/styles.css', stylesController)

  server.get('/lebenslauf', lebenslaufController)

  server.get('/contact', contactStartController)

  server.get('/save', contactController)

  server.post('/save', contactController)

  server.listen(8040, () => console.log('server started'))
const path = require('path')
const express = require('express')
const indexController = require ('./index')
const lebenslaufController = require ('./lebenslauf')

const server = express()


  server.get('/', indexController)

  server.get('styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'styles.css'))
  })

  server.get('/lebenslauf', lebenslaufController)

  server.listen(8040, () => console.log('server started'))
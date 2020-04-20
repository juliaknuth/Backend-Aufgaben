const express = require('express')
const path = require ('path')

module.exports = (request, response) => {
    response.json(
        path.join(__dirname, 'lebenslauf.html')

    )
}
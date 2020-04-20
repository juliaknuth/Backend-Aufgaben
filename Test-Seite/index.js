const express = require('express')
const path = require ('path')

module.exports = (request, response) => {
    response.sendFile(
        path.join(__dirname, 'index.html')
    )
}
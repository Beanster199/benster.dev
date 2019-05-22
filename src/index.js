const express = require('express')
const app = express()
const port = 3000
const uuid = require('uuid')
const request = require('request')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


app.get('/', async (req, res) => {
    const _int = Math.floor(Math.random() * 59);
    console.log(_int)
    request.get('http://www.commitstrip.com/en/page/' + _int+ '/', (error, response, body) => {
        const dom = new JSDOM(body)
        const a = dom.window.document.querySelectorAll('.excerpt section a')
        console.log(dom.window.document.querySelectorAll('.excerpt section a')[0])
        console.log(a.innerHTML)
        res.json(dom.window.document.querySelectorAll('.excerpt section a')[0])

    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
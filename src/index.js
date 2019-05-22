const express = require('express')
const app = express()
const port = 3000
const fetch = require('node-fetch')
const cheerio = require('cheerio')

app.get('/', async (req, res) => {
    const _int = Math.floor(Math.random() * 59);
    const response = await fetch('http://www.commitstrip.com/en/page/' + _int + '/');
    const html = await response.text();
    const $ = cheerio.load(html)
    const _i = Math.floor(Math.random() * 19);
    const href = $('.excerpt section a')[_i].attribs.href
    const response2 = await fetch(href);
    const img = await response2.text();
    const s = cheerio.load(img)
    const imagen = s('img')[0].attribs.src
    res.send(imagen)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
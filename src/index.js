const express = require('express')
const app = express()
const port = 3000
const cheerio = require('cheerio')
const path = require('path')

app.use(express.static(__dirname + '/assets'))

app.get('/', (req,res) => {
        let name = 'mariano'
        console.log(`mi nombre es ${name}`)
});

app.get('/test', (req,res) => {
        res.sendFile(path.join(__dirname+'/assets/index-brain.html') )
});

app.post('/', async (req, res) => {
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
    const obj = {
            "parse": "full",
            "response_type": "in_channel",
            "text": imagen,
            "unfurl_media": true,
            "unfurl_links": true
    }
    res.json(obj)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

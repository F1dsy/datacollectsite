const { Console } = require('console');
let express = require('express');
let app = express();

let PORT = process.env.PORT;

app.use(express.static('./'))

app.use(express.json());

app.post('/loc', (req, res) => {
    // let now = new Date(Date.now());
    // console.log(now.toTimeString());
    let string = `${req.body['lat']},${req.body['long']}`;
    console.log(string);
    
    res.send('check');
});

app.get('/ip', (req, res) => {
    // let now = new Date(Date.now());
    // console.log(now.toTimeString());
    console.log('IP: '+ req.headers['x-forwarded-for']);   
    console.log('User Agent: '+ req.headers['user-agent']);
    console.log('Sec-ch-ua: '+ req.headers['sec-ch-ua']);
    console.log('Language: '+ req.headers['accept-language']);
    res.send('check');
});

app.post('/battery', (req, res) => {
    console.log(req.body);
});

app.listen(PORT || 8080, ()=>{
    console.log(`Listening on ${PORT} `);
} )

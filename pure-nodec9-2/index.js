const http = require('http');
const url = require('url');
const port = 5000;
const users =('./users.json');

const server =http.createServer((req, res) => {
    if(req.url === '/'){
        renderHTML('./index.html', res);
    }
    else if(req.url === '/raw-html'){
        res.write('<h1>Welcome</h1>')
    }
    else if(req.url === '/users'){
        res.writeHead(200, {'content-Type': application/json});
        res.write(JSON.stringify(users.users));
        res.end();
    }
    else{
        res.writeHead(404);
        res.write('not found');
        res.end();
    }
})

server.listen(port, () => console.log('running on port ' + port));

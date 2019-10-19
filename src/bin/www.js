import http from 'http';
import app from '../app';

app.set('port', process.env.NODE_PORT || 3000);

const server = http.createServer(app);

server.listen(app.get('port'));

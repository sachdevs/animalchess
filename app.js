/**
 * THIS CODE IS SUPER SHITTY DO NOT RE-USE ALL IT DOES IS FORWARD
 * SOCKET EMITS TO ALL USERS
 */

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var debug = require('debug')('animalchess:server');
var http = require('http');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
}
if (port >= 0) {
    // port number
    return port;
}

return false;
}
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
}

var bind = typeof port === 'string'
? 'Pipe ' + port
: 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
    break;
    case 'EADDRINUSE':
    console.error(bind + ' is already in use');
    process.exit(1);
    break;
    default:
    throw error;
}
}
function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
  ? 'pipe ' + addr
  : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

// routes
app.use('/', routes);
app.use('/users', users);

var io = require('socket.io')(server);
io.on('connection', function(socket){
    socket.on('piece move', function(move) {
        socket.broadcast.emit('opponent moved', move);
    });
    console.log('a user connected');
});


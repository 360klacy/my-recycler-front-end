import openSocket from 'socket.io-client';

const socket = openSocket('localhost:3100');


function sayHi(){
    console.log('msg sent')
    socket.emit('msg', 'hello')
}
sayHi();

export { sayHi }
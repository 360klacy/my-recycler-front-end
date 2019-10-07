import openSocket from 'socket.io-client';

const socket = openSocket('localhost:3100');


function sayHi(){
    console.log('msg sent')
    socket.emit('msg', 'hello')
}
function subTickets(){
    socket.emit('sub-tickets','321')
}
function ticketInfo(cb){
    socket.on('ticket-info',ticketInfo=>cb(null,ticketInfo))
}

export { sayHi, ticketInfo, subTickets }
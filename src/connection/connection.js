import openSocket from 'socket.io-client';

const socket = openSocket(window.apiHost);


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
function setTicket(cb){
    socket.on('ticket-data',ticketInfo=>cb(null, ticketInfo))
}
function getTicket(id){
    socket.emit('need-ticket-info', id)
}

export { sayHi, ticketInfo, subTickets, setTicket, getTicket }
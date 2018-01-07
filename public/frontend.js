var socket = io()

function play (instId) {
    socket.emit('play', {id: instId})
}

$(function () {
    socket.on('play', function(data) {
        var instrument = $('#a' + data.id)[0]
        instrument.play()
    })
})
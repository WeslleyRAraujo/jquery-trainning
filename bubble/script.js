function addBall() {
    var x = Math.floor(Math.random()*800)
    var y = Math.floor(Math.random()*500)
    var ball =  $('<div class="bola"></div>')

    ball.css('left', x + 'px')
    ball.css('top', y + 'px')
    ball.css('background-color', 
        'RGB(' + Math.floor(Math.random()*255) + "," +  Math.floor(Math.random()*255) + "," +  Math.floor(Math.random()*255) + ")"
    )

    ball.bind('click', function() {
        $(this).fadeOut('fast');
        placar++
        updateScoreboard()
    })

    $(document.body).append(ball)
}

function updateScoreboard() {
    $('#placar').html(scoreboard)
}

var scoreboard = 0

$(function() {
    $('#start').bind('click', function () {
        setInterval(addBall, 1000)
    }) 
})
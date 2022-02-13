var vez = 'o'

function updatePlacar() {
    $('.placar').html(`É b vez de: ${vez}`)
}

function verificar() {
    var a1 = $('.a1').attr('data-marcado')
    var a2 = $('.a2').attr('data-marcado')
    var a3 = $('.a3').attr('data-marcado')

    var b1 = $('.b1').attr('data-marcado')
    var b2 = $('.b2').attr('data-marcado')
    var b3 = $('.b3').attr('data-marcado')

    var c1 = $('.c1').attr('data-marcado')
    var c2 = $('.c2').attr('data-marcado')
    var c3 = $('.c3').attr('data-marcado')
    
    var winner = ""

    for(var i = 0; i <= 1; i++) {
        if(i == 0) {
            var op = 'o'
        } else {
            var op = 'x'
        }

        if(a1 == op && a2 == op && a3 == op) {
            winner = op
        }

        if(b1 == op && b2 == op && b3 == op) {
            winner = op
        }

        if(c1 == op && c2 == op && c3 == op) {
            winner = op
        }

        if(a1 == op && b1 == op && c1 == op) {
            winner = op
        }

        if(a2 == op && b2 == op && c2 == op) {
            winner = op
        }

        if(a3 == op && b3 == op && c3 == op) {
            winner = op
        }

        if(a1 == op && b2 == op && c3 == op) {
            winner = op
        }

        if(a3 == op && b2 == op && c1 == op) {
            winner = op
        }
    }

    if(winner != '') {
        alert("O VENCEDOR FOIIII: " + winner)
        $('.area').html('')
        $('.area').attr('data-marcado', '')
        vez = 'o'
    }
}

$(function() {
    updatePlacar()
    $('.area').bind('click', function() {
        if($(this).html().length == 0) {
            if(vez == 'o') {
              $(this).html('o')
              $(this).attr('data-marcado', 'o')
              vez = 'x'  
            } else {
                $(this).html('x')
                $(this).attr('data-marcado', 'x')
                vez = 'o'  
            }
            updatePlacar()
            verificar()
        }
    })
})
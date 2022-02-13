$(function () {

    let horaEscolhaCampo

    $('input').bind('focus', function(){
        let pos = $(this).offset()
        let width = $(this).width()

        $('.hora-escolha').css('left', pos.left + width + 7)
        $('.hora-escolha').css('top', pos.top)
        $('.hora-escolha').show()

        horaEscolhaCampo = $(this)
    })

    $('input').bind('blur', function(){
        setTimeout(() => {
            $('.hora-escolha').hide()
        }, 200);
    })

    $('.hora-escolha button').bind('click', function(){
        let hora = $(this).html()
        horaEscolhaCampo.val(hora)
    })
})
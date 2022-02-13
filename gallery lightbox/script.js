$(function () {

    $("a.galery").bind('click', function() {
        var img = $(this).find('img').attr('src')
        $('.imgbox img').attr('src', img)
        $('.bgbox, .imgbox').fadeIn('fast')
    })

    $('button, .bgbox').bind('click', function() {
        $('.bgbox, .imgbox').fadeOut('fast')
    })
})
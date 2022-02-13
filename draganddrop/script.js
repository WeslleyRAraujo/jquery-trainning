$(function () {

    $('#objeto').bind('mousedown', function() {
        $(this).bind('mousemove', function(e) {
            var x = e.originalEvent.pageX
            var y = e.originalEvent.pageY

            var width = $(this).width()
            var height = $(this).height()

            $(this).css('left', (x - (width /2)) + 'px')
            $(this).css('top', (y - (height /2)) + 'px')
            $(this).css('cursor', 'grabbing')
            $(this).css('background-color', 
                'RGB(' + Math.floor(Math.random()*255) + "," +  Math.floor(Math.random()*255) + "," +  Math.floor(Math.random()*255) + ")"
            )

        })
    })

    $('#objeto').bind('mouseup', function() {
        $(this).css('cursor', 'grab')
        $(this).unbind('mousemove')
    })
})
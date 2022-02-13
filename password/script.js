$(function () {
    $('#senha').bind('keyup',function() {
        var txt = $(this).val()
        var forca = 0
        $('#forca').html('Força: ' + forca)

        var regexLetters = /[a-z]/i
        var regexNumber = /[0-9]/
        var regexSpecialChar = /[^a-z0-9]/i

        if(txt.length > 6) {
            forca += 25
        }

        var reg = new RegExp(regexLetters)
        if(reg.test(txt) && txt.length > 6){
            forca += 25
        }

        var reg = new RegExp(regexNumber)
        if(reg.test(txt) && txt.length > 6){
            forca += 25
        }
        
        var reg = new RegExp(regexSpecialChar)
        if(reg.test(txt) && txt.length > 6){
            forca += 25
        }

        $('#forca').html('Força: ' + forca)
    })
})
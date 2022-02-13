$(function () {
    $("#form").bind('submit', function(event) {
        event.preventDefault()
        var data = $(this).serialize()
        console.log(data)

        $.ajax({
            type: 'POST',
            data: data,
            url: './ajax.php',
            dataType: 'json',
            success: function (data) {
                console.log(data)
            },
            error: function (err) {
                alert("ocorre um erro: " + err.responseText)
            }
        })
    })
})
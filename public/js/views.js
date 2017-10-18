$(document).ready(function () {


    //when the submit is pressed, uses ajax to submit to the db
    $('#submit').on('click', function (event) {

        var newBurger = {
            name: $('#burger-name').val().trim()
        };

        $.ajax({
            type: "POST",
            url: "/api/burger",
            data: newBurger,
            success: function (message) {
                console.log('Success!');
            },
            error: function (XMLHTttpRequest, textStatus, errorThrown) {
                console.log('err didn\'t work');
            }
        });
    });
});

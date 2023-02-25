/*
$(function () {
    $(".class-name").click(function () {
        let csrf = $(this).attr('csrf');
        let post = $(this).attr('page-id');
        $.ajax({
            url: '/whatever/',
            data: {
                'post': post,
                'csrfmiddlewaretoken': csrf
            },
            type: 'post',
            cache: false,
            success: function (returned_values) {
                // do whatever you want after success!
            },
        });
    });
})

 */

function setDataToBeSaved(diet_id, day,) {
    console.log("new class");
    console.log(diet_id);
    console.log(day);
}

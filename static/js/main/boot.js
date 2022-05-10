let user

function setUserName() {

}

function click() {
    $.ajax({
        type: "GET",
        url: "/my-ajax-test/",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            user = response;
        },
        failure: function (errMsg) {
        }
    });
}
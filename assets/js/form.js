window.addEventListener("DOMContentLoaded", function () {

    // form elements
    var form = document.getElementById("my-form")
    var button = document.getElementById("form-button")
    var status = document.getElementById("form-status")

    // success and error funcs
    function success() {
        form.reset()
        button.style = "display:none"
        status.innerHTML = "Thank you!"
    }

    function error() {
        status.innerHTML = "It looks like something went wrong."
    }

     form submission
     form.addEventListener("submit", function (e) {
        e.preventDefault()
        var data = new FormData(form)
        // ajax(form.method, form.action, data, success, error)
        Email.send({
            Host : env.HOST,
            Username : env.USERNAME,
            Password : env.PASSWORD ,
            To : form.action,
            From : form.email,
            Subject : form.name,
            Body : form.message
        }).then(
          message => alert(message)
        )
     })
})

// ajax request
// function ajax(method, url, data, success, error) {
//    var xhr = new XMLHttpRequest()
//    xhr.open(method, url)
//    xhr.setRequestHeader("Accept", "application/json")
//    xhr.onreadystatechange = function () {
//        if (xhr.readyState !== XMLHttpRequest.DONE) return
//        if (xhr.status === 200) {
//            console.log("success")
//            success(xhr.response, xhr.responseType)
//        }
//        else {
//            console.log("error", xhr.status, xhr.response, xhr.responseType)
//            error()
//        }
//    }
//    xhr.send(data)
// }

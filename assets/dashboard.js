$(document).ready(function(){
    $('.sidenav').sidenav();

    $('.modal').modal();

    var today = new Date()
    var year = today.getFullYear()
    var month = today.getMonth() + 1
    var day = today.getDate()
    var hour = today.getHours()
    var minutes = today.getMinutes()
    var seconds = today.getSeconds()

    var dateFormat = `${year}-${month}-${day}T${hour}:${minutes}:${seconds}`
    let deadline = document.querySelector('#application-deadline')
    deadline.setAttribute('min', dateFormat)
});

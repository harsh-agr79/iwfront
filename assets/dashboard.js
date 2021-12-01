$(document).ready(function(){
    $('.sidenav').sidenav();

    $('.modal').modal();
    var today = new Date()
    var year = today.getFullYear()
    var month = today.getMonth() + 1
    var day = today.getDate()
    var hour = today.getHours()
    var minutes = today.getMinutes()
    var finalMonth = month + 3
    var finalYear = year
    
    if(finalMonth>12){
        finalMonth-=12
        finalYear = year + 1
    }
    if(day<10){
        day = '0'+day
    }
    if(month<10){
        month = '0'+month
    }
    if(finalMonth<10){
        finalMonth = '0'+finalMonth
    }
    if(hour<10){
        hour = '0'+hour
    }
    if(minutes<10){
        minutes = '0'+minutes
    }
    
    var dateFormat = `${year}-${month}-${day}T${hour}:${minutes}`
    var maxDateFormat = `${finalYear}-${finalMonth}-${day}T${hour}:${minutes}`
    let deadline = document.querySelector('#application-deadline')
    deadline.setAttribute('min', dateFormat)
    deadline.setAttribute('max', maxDateFormat)
});

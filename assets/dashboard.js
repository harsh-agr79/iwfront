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

    //chips
    $('.chips').chips();
    $('.chips-autocomplete').chips({
        autocompleteOptions: {
          data: {
            'Php': null,
            'HTML/HTML5': null,
            'Laravel': null,
            'React': null,
            'JavaScript': null,
            'Photoshop': null,
            'UI/UX': null,
            'Illustrator': null,
            'Word': null,
            'Excel': null,
            'MongoDB': null,
            'MySQL': null,
            'Node.js': null,
            'Express.js': null,
            'Next.js': null,
            'Git': null,
            'Npm': null,
            'After Effects': null,
            'CSS/CSS3': null
          },
          limit: Infinity,
          minLength: 1
        }
    });
});

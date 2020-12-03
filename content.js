window.onload = function() {
    var body = document.getElementsByClassName('body-top');
    body[0].style.backgroundColor = '#000000';
    this.createCookie("%83e%83X%83g%82P", 1, 0)
    //var myTimer = document.getElementById("home").innerHTML = <bo
};

this.createCookie = function(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*240*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
    
};

// this.readCookie = function(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// };
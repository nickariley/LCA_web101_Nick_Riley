function  showTime(){
    var a_p = "";
    var  today = new Date();

    var current_hour =  today.getHours();
    var current_minute = today.getMinutes();
    var current_second = today.getSeconds();
    
    if( current_hour < 12 ){
        a_p = "<span> AM </span>"
        }else{
        
        a_p = "<span>PM</span>"
    }

    if(current_hour == 0){
        
        current_hour = 12;
    }
    
    if(current_hour > 12){
    
    current_hour = current_hour - 12;
}
      current_hour =  checkTime(current_hour);
      current_minute = checkTime(current_minute);
      current_second =   checkTime(current_second)
document.getElementById('clock-large').innerHTML = current_hour + " : " + current_minute + " : " + current_second + "  " + a_p;
function  checkTime(i){
        if(i < 10){
        i = "0" + i;
        }
            return i;
    }
}

setInterval(showTime);
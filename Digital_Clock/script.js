window.addEventListener("load", calculateTime)
function calculateTime(){
    var date = new Date();

    var dayNumber= date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    var dayNames= ['SUN', 'MON','TUE','WED','THUR','FRI','SAT'];
    // console.log(date);

    hours = hours % 12;
    hours = hours ? hours : '12';
    hours= hours <10 ? '0'+ hours : hours;
    minutes = minutes <10 ? "0" + minutes : minutes;

    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML= hours;
    document.getElementById("minute").innerHTML= minutes;
    document.getElementById("ampm").innerHTML= ampm;

    setTimeout(calculateTime, 200);
}


// calculateTime();
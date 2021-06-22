let date = new Date();
let hours = date.getHours();
let mnts = date.getMinutes();
let sec = date.getSeconds();
let today = "Am";
if(hours>12){
  hours = hours-12;
  today= "PM" ;
}
if(hours<10){
    hours="0"+hours;
}
if(mnts<10){
    mnts="0"+mnts;
}
if(sec<10){
    sec="0"+sec;
}
let fulltime =hours + ":" + mnts + ":" +sec+""+today;

document.getElementById("demo").innerHTML ="Time is"+":"+" "+fulltime;
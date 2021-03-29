let a;
let date;
let time;
let day;
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
// const options = { weekday: 'long'};
setInterval(() => {
    a = new Date();
   date = a.toLocaleDateString();
   time = a.toLocaleTimeString();
   day = a.getDay( undefined, daylist);

   
   
   document.getElementById("time").innerHTML = time;
   document.getElementById('date').innerHTML = date;
   document.getElementById("day").innerHTML =  daylist[day];
}, 1000);





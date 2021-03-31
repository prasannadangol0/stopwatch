setInterval(showtime,1000);
function showtime(){
    var time= new Date();
    var hr= time.getHours();
    var min= time.getMinutes();
    var sec= time.getSeconds();
    let am_pm = "AM";
    if(hr > 12){
        hr = hr - 12;
        am_pm = "PM";
    }
    else if(hr == 24){
        hr = 0;
        am_pm = "AM";
    }
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currenttime = hr + ":" + min +":"+sec +" "+ am_pm;
    document.getElementById('timepos').innerHTML=currenttime;
}

// --------------analogclock------
const deg = 6; 
const rhr = document.querySelector('#rhr');
const rmn = document.querySelector('#rmn');
const rsc = document.querySelector('#rsc');
setInterval(() => {

    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    rhr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    rmn.style.transform = `rotateZ(${mm}deg)`;
    rsc.style.transform = `rotateZ(${ss}deg)`;

})


/*------------TIMER-------------*/

// function cng(){
//     var str="START";
//     var stp="STOP";
//     if(document.getElementById("startbtn").innerHTML==str){
//         document.getElementById("startbtn").innerHTML=stp;
//     }
//     else{
//         document.getElementById("startbtn").innerHTML=str;
//     }
// }

// function countdwn(){
//     const start = 10;
//     let time = start * 60;

//     const countdown = document.getElementById('timerpos');
// }
// showtime();


// setInterval(clock,1000);
// const start = 10;
// let time = start * 60;
// const countdown = document.getElementById('countpos');
// function clock(){
//   const min = Math.floor(time/60);
//   let sec = time % 60;
  
//   countdown.innerHTML = `${min}: ${sec}`;
//   time--;
//   }


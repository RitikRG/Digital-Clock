const hour = document.querySelector('#hourDisplay');
const minute = document.querySelector('#minutesDisplay');
const second = document.querySelector('#secondsDisplay');
const phase = document.querySelector('#am-pm-heading');
const timeFunction=()=>{
    let today = new Date();
    let hrs = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    hour.innerText = hrs;
    minute.innerText = min;
    second.innerText = sec;
    if(parseInt(hrs)>=0 && parseInt(hrs)<12){
        phase.innerText = 'AM'
    }
    if(parseInt(hrs)>=12 && parseInt(hrs)<=23){
        phase.innerText = 'PM'
    }
}
setInterval(timeFunction, 1000)
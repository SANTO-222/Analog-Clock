const hours = document.querySelector('.hrs')
const Mins = document.querySelector('.min')
const Seconds = document.querySelector('.sec')

setInterval(runclock,1000);
function runclock(){
    const time=new Date();
    const sec=time.getSeconds()/60;
    const min=(sec+time.getMinutes())/60;
    const hrs=(min+time.getHours())/12;

hours.style.setProperty('--rotation',hrs*360);
Mins.style.setProperty('--rotation',min*360);
Seconds.style.setProperty('--rotation',sec*360);
    
}
runclock();
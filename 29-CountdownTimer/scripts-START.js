let countdown;
const timerDisplay=document.querySelector('.display__time-left');
const endTime=document.querySelector('.display__end-time');
const buttons=document.querySelectorAll('[data-time]');

function timer(seconds){
    clearInterval(countdown);
    const current=Date.now();
    const then=current+seconds*1000;
    displayTimeLeft(seconds);
    displayEndTime(then);
    countdown=setInterval(()=>{
        const secondsLeft=Math.round((then-Date.now())/1000)
        if(secondsLeft<0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    },1000)
}

function displayTimeLeft(seconds){
    const minutes=Math.floor(seconds/60);
    const remainderSeconds=seconds%60;
    timerDisplay.textContent=`${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}
function displayEndTime(timestamp){
    const end=new Date(timestamp);
    const hours=end.getHours();
    const minutes=end.getMinutes();
    endTime.textContent=`Be back at ${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}
function startTimer(){
    const seconds=parseInt(this.dataset.time);
    timer(seconds);
}
buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit',function(e){
    e.preventDefault();
    const mins=this.minutes.value;
    timer(mins * 60);
    this.reset();
})
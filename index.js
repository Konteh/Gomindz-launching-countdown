const countdown = () =>{
    const countDate = new Date('September 25, 2021 00:00:00').getTime();
    const now = new Date();

    const gap = countDate - now;

    // setting the time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // calculating the time gap
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //updating the html text

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.seconds').innerText = textSecond;
   
    
}
setInterval(countdown,1000);
const clockContainer = document.querySelector(".js-clock"),
   clockType = clockContainer.querySelector("h3"),
   clockTitle = clockContainer.querySelector("h1");
   
   
   
   function getTime(){
       
        var timetype = "am";
       const date = new Date();
       const sec = date.getSeconds();
       const min = date.getMinutes();
       var hour = date.getHours();
       if(24 > hour && hour > 12){
           hour = hour -12;
            timetype = "pm";
       }
       if(hour <10){
           hour = `0${hour}`;
       }
       clockType.innerText = `${timetype}`;
        clockTitle.innerText =`    ${hour}:${min < 10 ? `0${min}`:min}:${sec < 10  ? `0${sec}`:sec}` ;

   }

   function init(){
        
       getTime();
       setInterval(getTime, 1000); 
   }

init();
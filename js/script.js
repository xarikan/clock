// const sec = document.querySelector('.s');
// const min = document.querySelector('.m');
// const hour = document.querySelector('.h');
// const numHour = document.querySelector('.hours');
// const numMin = document.querySelector('.minutes');

// let i = 360;

// function clock() {  

//   let time = new Date();

//   let seconds = time.getSeconds() * 6;
//   let minutes = time.getMinutes() * 6;
//   let hours = time.getHours() * 30;

//   if(seconds == 0 || i > 360){
//     sec.style.transform = `rotate(${i}deg)`;
//     i +=6;
//   }else{
//     sec.style.transform = `rotate(${seconds}deg)`;
//   }

//   sec.style.transition = `1s linear`;
//   min.style.transform = `rotate(${minutes}deg)`;
//   hour.style.transform = `rotate(${hours}deg)`;

//   numHour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
//   numMin.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

//   setTimeout(() => {clock()}, 1000);
// }


// clock();


// const tabsItems = document.querySelectorAll('.tabsItem');

// tabsItems.forEach((el)=> {

//   el.onclick = function () {  
//     console.log('Привет!');
//   }
//   // el.onclick += function () {  
//   //   console.log('Пока!');
//   // }

//   el.addEventListener('click', (e)=> {
    
//     e.preventDefault();
    

//   })


// });

const sec=document.querySelector('.s')
const min=document.querySelector('.m')
const hour=document.querySelector('.h')

const numHour= document.querySelector('.hours')
const numMin = document.querySelector('.minutes')
 let i=360;

function clock() {
  let time = new Date();
  let seconds = time.getSeconds()*6;
  let minuts = time.getMinutes()*6;
  let hours = time.getHours()*30;


  if(seconds==0|| i>360){
    sec.style.transform = `rotate(${i}deg)`
    i+=6;
  
  }else{
    sec.style.transform = `rotate(${seconds}deg)`
  }

  
  sec.style.transition='1s linear'
  min.style.transform = `rotate(${minuts}deg)`
  hour.style.transform = `rotate(${hours}deg)`
  numMin.innerHTML=time.getMinutes() < 10 ? '0'+time.getMinutes(): time.getMinutes();
   if(time.getHours()<10){
    numHour.innerHTML=` 0 ${time.getHours()}`
  }else{
    numHour.innerHTML=time.getHours()
  }
  setTimeout(() => {
  clock()
}, 1000);
}
clock();

const tabsItems = document.querySelectorAll('.tabsItem')
const tabsContentItems = document.querySelectorAll('.tabsContentItem')

tabsItems.forEach((el , item)=>{
el.addEventListener('click',(event)=>{
  event.preventDefault();

tabsItems.forEach((element , i)=> {
  element.classList.remove('active')
  tabsContentItems[i].classList.remove('active')
});

el.classList.add('active');
tabsContentItems[item].classList.add('active')
console.log(item);

// if(tabsItems[0].classList.contains('active')){
//   tabsContentItems[0].classList.add('active')
// }else{
//   tabsContentItems[1].classList.add('active')
// }


})

})

// const btn=document.querySelector('.stopwatch__btn')
// console.log(btn);

// btn.addEventListener('click',()=>{

//   if(btn.innerHTM='start'){
//     btn.innerHTML='stop'
//   }else if(btn.innerHTML='stop'){
//     btn.innerHTM='start'
//   }
  

// })

var startStopBtn = document.querySelector(".stopwatch__btn");
var isRunning = 0;
var intervalId;
const lampa=document.querySelector('.tabsLink__span');

var secSecundomer = document.querySelector('.stopwatch__seconds')
var minSekundomer=document.querySelector('.stopwatch__minutes')
var hourSekundomer=document.querySelector('.stopwatch__hours')

// function startTimer() {
//   seconds++;

//   if (seconds == 60) {
//     seconds = 0;
//     minutes++;
//   }

//   if (minutes == 60) {
//     minutes = 0;
//     hours++;
//   }

//   setTimeout(() => {
//     startTimer()
//   }, 1000);
// }
// Кнопка старт / стоп/ очистка !

startStopBtn.addEventListener("click", function() {
   if (isRunning==2) {

      isRunning = 0;
      startStopBtn.textContent = "start";
   } else if(isRunning==1){
     
      isRunning = 2;
      startStopBtn.textContent = "clear";
   }else if(isRunning==0){

    isRunning=1;
    startStopBtn.textContent = "stop";
    startTimer();
   }
// Лампочка 
   if(isRunning==1){
    lampa.style.display = 'block'
    lampa.style.background ='white'
   }else if(isRunning==2){
    lampa.style.background ='red'
   }else if(isRunning==0){
    lampa.style.display = 'none'
   }

  //  секундомер

   function startTimer() {
    secSecundomer.innerHTML ++;
  
    if (secSecundomer.innerHTML == 60) {
      secSecundomer.innerHTML = 0;
      minSekundomer.innerHTML++;
    }
  
    if (minSekundomer.innerHTML == 60) {
      minSekundomer.innerHTML = 0;
      hourSekundome.innerHTML++;
    }
  console.log(secSecundomer);
    setTimeout(() => {
      if(isRunning==1){
        startTimer()
      }
    }, 1000);
  }
  if(isRunning==0){
    secSecundomer.innerHTML=0;
    minSekundomer.innerHTML=0;
    hourSekundomer.innerHTML=0;
  }

});





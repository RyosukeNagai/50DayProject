// //ゼロを追加する 関数
// let addZero = function (value) {
//   if (value < 10) {
//     value = '0' + value;
//   }
//   return value;
// }


// document.getElementById('start_stop').addEventListener('click',
// function(){
//   let now = new Date();
//   let seconds = now.getSeconds(); //秒を取得

//   //secondsが10秒未満
//   seconds = addZero(seconds);

//   let minutes = now.getMinutes(); //分を取得
//   minutes = addZero(minutes);

//   let hours = now.getHours(); //時間を取得
//   hours = addZero(hours);

//   document.getElementById("timer").innerHTML =
//   hours + ":" + minutes + ":" + seconds;

// });

let start;
let timer_id;
document.getElementById('start_stop').addEventListener('click', 
function(){
  if(this.innerHTML === 'START'){
    start = new Date();

    timer_id = setInterval(goTimer, 10); //間隔を指定1/1000秒事にgoTimerが呼び出される
    
    //STOPボタンにする
    this.innerHTML = 'STOP';
    this.classList.remove('btn-primary');
    this.classList.add('btn-danger');
  
  } else {
    clearInterval(timer_id);
    //STARTボタンに戻す
    this.innerHTML = "START";
    this.classList.remove('btn-danger');
    this.classList.add('btn-primary');
  }
});

let addZero = function(value){
  if(value < 10) {
    value = '0' + value;
  }
  return value;
}

let goTimer = function(){
  let now = new Date();

  let milli = now.getTime() - start.getTime();
  let seconds = Math.floor(milli / 1000); //Math.floor少数を切り捨て整数にする
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds - minutes * 60;
  minutes = minutes - hours * 60;

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds;
}
document.addEventListener('DOMContentLoaded', function(){
  const el = document.querySelector('.animate-title');
  const str = el.innerHTML.trim().split("");
  // let concatStr = '';

  // for(let c of str) {
  //   c = c.replace(' ', '&nbsp;'); //半角スペースの代入
  //   concatStr += `<span class="char">${c}</span>`
  // }
  
  //reduseを使うことでlet concatStrが要らなくなる。
  el.innerHTML = str.reduce((acc, curr) => {
    curr = curr.replace(' ', '&nbsp;'); //半角スペースの代入
    return `${acc}<span class="char">${curr}</span>`
  }, "");
});
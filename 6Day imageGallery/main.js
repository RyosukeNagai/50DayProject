let images = [
  {
    "path": "img/img01.jpg",
    "name": "name01",
    "caption": "コメント1"
  },
  {
    "path": "img/img02.jpg",
    "name": "name02",
    "caption": "コメント2"
  },
  {
    "path": "img/img03.jpg",
    "name": "name03",
    "caption": "コメント3"
  }
];

let img;
let caption;
let div;

//変数iを宣言0を代入, 終了の条件(配列の長さ), i = i + 1(i++)  
for(let i=0; i<images.length; i++) {

img = document.createElement('img'); //imgのタグ生成
img.setAttribute('src', images[i].path); //src属性にimages[0]を指定

//<div class="inner"><p>caption<span>name</span></p></div>
caption = document.createElement('div');
caption.className = 'inner';
caption.innerHTML = '<p>' + images[i].caption + '<span>' + images[i].name + '</span></p>';

//<div class="photo"><img><p></div>
div = document.createElement('div');
div.className = 'photo'; 
div.appendChild(img);
div.appendChild(caption);


//idの中にimg要素を追加
document.getElementById('img_unit').appendChild(div); 

}
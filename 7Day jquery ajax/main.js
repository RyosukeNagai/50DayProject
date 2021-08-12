$.getJSON('https://h2o-space.com/htmlbook/images.php', function(data) {
  for(let i = 0; i < data.length; i++) {
    /*<div class="photo">
      <img src="img/img01.jpg">
      <div class="inner">
        <p>caption<span>name</span></p>
      </div>
    </div> */
    $('<div class="photo"></div>')
      .append('<img src="' + data[i].path + '">')
      .append('<div class="inner"><p>' + data[i].caption + '<span>' + 
      data[i].name + '</span></p></div>')
      //上の要素を#img_unit内に追加する
      .appendTo('#img_unit');
  }
});

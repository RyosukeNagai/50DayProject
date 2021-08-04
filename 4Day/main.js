//日付を表示する
let today = new Date();
let todayHtml = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

document.write('<p class="date">' + todayHtml + '</p>');
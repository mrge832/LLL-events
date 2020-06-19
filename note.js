process.stdin.resume();
process.stdin.setEncoding('utf8');
// Your code here!
var URL = //document.querySelector("#groupEventShow > article > div > div.event-detail__description > dl:nth-child(1) > dd.event-detail__description--outside > a");
'https://www.google.com/calendar/render?action=TEMPLATE&text=%E3%83%8A%E3%83%81%E3%83%A5%E3%83%A9%E3%83%AB%E3%83%AA%E3%83%83%E3%83%97%E3%82%92%E3%81%A4%E3%81%8F%E3%82%8BWorkshop&dates=20200628T040000Z/20200628T060000Z&location=%E6%9C%AA%E5%AE%9A&trp=true&trp=undefined&trp=true&';
//検索と分解
var URL1 = URL.slice(0, 54);
var result1 = URL.indexOf('&text');
//console.log(result);
var result2 = URL.indexOf('&trp');
var URL2 = URL.slice(result1, result2);
//console.log(URL2);
//console.log(result);
var URL3 = URL.slice(result2);

var Calendar = 'g2466jvdp4rmvmbc23havk6dc4%40group.calendar.google.com';
var Info = 'テスト' //エンコードが必要
var newURL = URL1 + '&src=' + Calendar + URL2 + '&details=' + Info + URL3;

console.log(newURL);

process.stdin.resume();
process.stdin.setEncoding('utf8');

var URL = document.querySelector("#groupEventShow > article > div > div.event-detail__description > dl:nth-child(1) > dd.event-detail__description--outside > a");
var URL1 = URL.slice(0, 54);
var result1 = URL.indexOf('&text');
var result2 = URL.indexOf('&trp');
var URL2 = URL.slice(result1, result2);
var URL3 = URL.slice(result2);

var Calendar = 'g2466jvdp4rmvmbc23havk6dc4%40group.calendar.google.com';
var Info = 'テスト' //エンコードが必要
var newURL = URL1 + '&src=' + Calendar + URL2 + '&details=' + Info + URL3;

alert(newURL);

/* var NewURL = 'https://www.google.com/calendar/render?action=TEMPLATE' +
'&src=' + Calendar +
'&text=%E7%AC%AC7%E5%9B%9E%20%E8%AA%AD%E6%9B%B8%E4%BC%9A%F0%9F%93%9A' +
'&dates=20200628T010000Z/20200628T030000Z' +
'&location=%E6%9C%AA%E5%AE%9A' +
'&details=' + Info +
'&trp=true&trp=undefined&trp=true&'; */

//chrome.tabs.create({url: URL}, function(tab));

/*chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({ url: URL });
}); */

//window.open(url,URL);

/*
'http://www.google.com/calendar/event?' +
'action='   + 'TEMPLATE' +
'&text='    + encodeURIComponent('予定タイトル') +
'&details=' + encodeURIComponent('予定の説明') +
'&location='+ encodeURIComponent('場所') +
'&dates='   + getUTC('2014-01-31T19:30:00+09:00') + '/' + getUTC('2014-01-31T21:30:00+09:00') +
'&trp='     + 'false' +
'&sprop='   + encodeURIComponent('リンク設置元のURL') +
'&sprop='   + 'name:' + encodeURIComponent('リンク設置元のサービス名');
*/

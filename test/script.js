var eventURL = document.querySelector("#groupEventShow > article > div > div.event-detail__description > dl:nth-child(1) > dd.event-detail__description--outside > a").href;

//検索と分解
var URL1 = eventURL.slice(0, 54);
var result1 = eventURL.indexOf('&text');
//console.log(result);
var result2 = eventURL.indexOf('&trp');
var URL2 = eventURL.slice(result1, result2);
//console.log(URL2);
//console.log(result);
var URL3 = eventURL.slice(result2);

var Calendar = 'g2466jvdp4rmvmbc23havk6dc4%40group.calendar.google.com';
var Info = 'テスト' //エンコードが必要

var newURL = URL1 + '&src=' + Calendar + URL2 + '&details=' + Info + URL3;

window.open(newURL);

//chrome.tabs.create({url: URL}, function(tab));

/*chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({ url: URL });
}); */

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

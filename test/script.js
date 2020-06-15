var URL = alert(location.href);
//'https://www.google.com/calendar/render?action=TEMPLATE&text=%E3%83%8A%E3%83%81%E3%83%A5%E3%83%A9%E3%83%AB%E3%83%AA%E3%83%83%E3%83%97%E3%82%92%E3%81%A4%E3%81%8F%E3%82%8BWorkshop&dates=20200628T040000Z/20200628T060000Z&location=%E6%9C%AA%E5%AE%9A&trp=true&trp=undefined&trp=true&';
//本来はここで検索と分解
/*var Calendar = 'g2466jvdp4rmvmbc23havk6dc4%40group.calendar.google.com';

var NewURL = 'https://www.google.com/calendar/render?action=TEMPLATE' +
'&src=' + Calendar +
'&text=%E7%AC%AC7%E5%9B%9E%20%E8%AA%AD%E6%9B%B8%E4%BC%9A%F0%9F%93%9A' +
'&dates=20200628T010000Z/20200628T030000Z' +
'&location=%E6%9C%AA%E5%AE%9A&trp=true&trp=undefined&trp=true&' +
'&details=' + Info +
'&trp=true&trp=undefined&trp=true&'; */

chrome.tabs.create({url: URL});

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

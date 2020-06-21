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
//var Info = 'テスト' //エンコードが必要

var newURL = URL1 + '&src=' + Calendar + URL2 + /*'&details=' + Info + */URL3;

window.open(newURL);

var Info = document.getElementsByClassName('articleBody')[0];
var Elements = Info.childElementCount;
var fullText = location.href + '\n';

//var i = 6;
for (let i = 0; i < Elements; i++) {
  var infoTag = Info.children[i];
  var infoText = infoTag.innerHTML;
  var cleanText = infoText + '\n';

  if (infoText.includes('<br>'))
    cleanText = infoText.replace(/<br>/g, '\n');

  if (infoText.includes('href'))
    cleanText = infoTag.children[0].href + '\n';
  else if (infoText.includes('<span')) {
    if (infoText.includes('<img draggable')) {
//      var findEmoji = '';
//      for (let j = 0; j < infoTag.childElementCount; j++)
//        findEmoji += infoTag.children[j].alt;
      cleanText = infoTag.children[0].innerText /*+ findEmoji */+ '\n';
    }
    else
//      cleanText = infoTag.children[0].innerText + '\n';
      while (cleanText.includes('span') == 1) {
        var delSpanTail = cleanText.replace(/<\/span>/g, ''); //全ての</span>を削除する
        var delSpanHead1 = delSpanTail.substr(delSpanTail.indexOf('>')+1);
        if (delSpanHead1.includes('img draggable') == 1) {
          cleanText = delSpanHead1;
          break;
        }
        var delSpanHead2 = delSpanHead1.substr(0, delSpanHead1.indexOf('<'));
        var delSpanHead3 = delSpanHead1.substr(delSpanHead1.indexOf('>')+1);
        cleanText = delSpanHead2 + delSpanHead3;
      }
  }
  else if (infoText.includes('<img src'))
    cleanText = infoTag.innerText + '\n';
  else if (infoText.includes('<img draggable')) {
    findEmoji = '';
    for (let j = 0; j < infoTag.childElementCount; j++)
      findEmoji += infoTag.children[j].alt;
    cleanText = infoTag.innerText + findEmoji + '\n';
  }

//  console.log(infoTag.children[0].innerText);
//  console.log('[' + i + ']' + Info.children[i].localName + ': ' + cleanText);
  fullText += cleanText;
}

console.log(fullText);

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

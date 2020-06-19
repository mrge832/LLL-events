var Info = document.getElementsByClassName('commonForm__textArea')[1];
var Elements = Info.getElementsByTagName('p').length;
var encodedText = location.href;

for (let i = 0; i < Elements; i++) {
  var infoTag = Info.getElementsByTagName('p')[i];
  var infoText = infoTag.innerHTML;

  var editEnter = infoText.replace(/<br>/g, '\n\n'); //全ての<br>を\nに変換

  while (editEnter.includes('img') == 1) {
    var delImg = editEnter.substr(editEnter.indexOf('>')+1);
    editEnter = delImg;
  }

  while (editEnter.includes('span') == 1) {
    var delSpanTail = editEnter.replace(/<\/span>/g, ''); //全ての</span>を削除する
    var delSpanHead1 = delSpanTail.substr(delSpanTail.indexOf('>')+1);
    var delSpanHead2 = delSpanHead1.substr(0, delSpanHead1.indexOf('<'));
    var delSpanHead3 = delSpanHead1.substr(delSpanHead1.indexOf('>')+1);
    editEnter = delSpanHead2 + delSpanHead3;
  }

  encodedText += encodeURI(editEnter);
}

console.log(encodedText);

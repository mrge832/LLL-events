//span内の絵文字もok ver
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

//<br> ver
/*var Info = document.getElementsByClassName('articleBody')[0];
var Elements = Info.childElementCount;
var fullText = location.href;

//var i = 6;
for (let i = 0; i < Elements; i++) {
  var infoTag = Info.children[i];
  var infoText = infoTag.innerHTML;
  var cleanText = infoText + '<br>';

  if (infoText === '<br>')
    cleanText = infoText;
  else if (infoText.includes('href'))
    cleanText = infoTag.children[0].href + '<br>';
  else if (infoText.includes('<span')) {
    if (infoText.includes('<img draggable')) {
      var findEmoji = '';
//      for (let j = 0; j < infoTag.childElementCount; j++)
 //       findEmoji += infoTag.children[0].children[j].alt;
      cleanText = infoTag.children[0].innerText + findEmoji + '<br>';
    }
    else
      cleanText = infoTag.children[0].innerText + '<br>';
  }
  else if (infoText.includes('<img src'))
    cleanText = infoTag.innerText + '<br>';
  else if (infoText.includes('<img draggable')) {
    findEmoji = '';
    for (let j = 0; j < infoTag.childElementCount; j++)
      findEmoji += infoTag.children[j].alt;
    cleanText = infoTag.innerText + findEmoji + '<br>';
  }

//  console.log(infoTag.children[0].innerText);
//  console.log('[' + i + ']' + Info.children[i].localName + ': ' + cleanText);
  fullText += cleanText;
}

console.log(fullText); */



//エンコードver
/*var Info = document.getElementsByClassName('commonForm__textArea')[1];
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

console.log(encodedText); */

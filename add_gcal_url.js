var url = (function(){
    
    var getUTC = function(date_str){
    	var date = new Date(date_str);
    	return date.getUTCFullYear() +
    		zerofill(date.getUTCMonth()+1) +
    		zerofill(date.getUTCDate()) +
    		'T' +
    		zerofill(date.getUTCHours()) +
    		zerofill(date.getUTCMinutes()) +
    		zerofill(date.getUTCSeconds()) +
    		'Z';
    };
    
    var zerofill = function(num){
    	return ('0'+num).slice(-2);
    }
    
    return 'http://www.google.com/calendar/event?' +
    'action='   + 'TEMPLATE' +
    '&text='    + encodeURIComponent('予定タイトル') +
    '&details=' + encodeURIComponent('予定の説明') +
    '&location='+ encodeURIComponent('場所') +
    '&dates='   + getUTC('2014-01-31T19:30:00+09:00') + '/' + getUTC('2014-01-31T21:30:00+09:00') +
    '&trp='     + 'false' +
    '&sprop='   + encodeURIComponent('リンク設置元のURL') +
    '&sprop='   + 'name:' + encodeURIComponent('リンク設置元のサービス名');

})();

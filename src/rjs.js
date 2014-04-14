/**
 * For instance you have to create a instance of rjs with: var r = new rjs();
 * 
 */
function rjs(/*options*/){
	this.log = log;
	this._remote = _remote;
	this._show = _show;
	this._reportMail = _reportMail;
	

	if(arguments.length == 1 && typeof arguments[0] == 'object'){
		this.remote = arguments[0].remote || null;
		this.level = arguments[0].level || 'silent'; //'silent','debug','onfail'
		this.appName = arguments[0].appName || 'SampleApp';
		this.env = arguments[0].env || 'production';
		this.report = arguments[0].report || false; 		
	}else{
		console.log('You have to pass some arguments');
	}

}
function log(){
	var msg = {
		title: this.appName,
		timestamp: Date.now()
	};
	if (Strings(arguments) == 1){
		//msg
		msg.body = arguments[0];
		msg.dumpObject = gotObject(arguments);
		
	}else if (Strings(arguments) == 2){
		//msg with title
		msg.title = arguments[0];
		msg.body = arguments[1];
		msg.dumpObject = gotObject(arguments);

	}else{
		return false;
	}
	_save(msg);
	if (this.remote){this._remote(msg);}
	if (this.level == 'debug'){this._show(msg);}
	if (msg.title == 'Error'){this._show(msg);}

	return true;

}
function _save(msg){
	var log = [];
	var altLog = window.localStorage.getItem('LOG');
	if (altLog){
		altLog = JSON.parse(altLog);
		for (var i = 0; i < altLog.length; i++){
			log.push(altLog[i]);
		}
	}
	log.push(msg);
	window.localStorage.setItem('LOG',JSON.stringify(log));
	

}
function _reportMail(msg){
	var body = 'Bug Report<br>'+ '_________________' + '<br>' +
	    msg.title +' : '+msg.body+ '<br>' +
	    'Model: ' + device.model + '<br>' +
	    'OS Version: ' + device.version + '<br>' + 
	    'Aktuelle Objekte:' + '<br>________________<br>';
	    if (msg.dumpObject){
	        body += 'DumpObject: ' + JSON.stringify(dumpObject);
	    }
	        
	window.plugin.email.open({
	    to:          [this.report.email],
	    cc:          [],
	    bcc:         [],
	    attachments: [],
	    subject:     this.appName + ' Bug Report',
	    body:        body,
	    isHtml:      true
	});
	
}
function _show(msg){
	if (this.report){
		var buttons = [this.report.btnReport,this.report.btnOK];
	}else{
		var buttons = ['OK']
	}
	if (this.env == 'production'){
		navigator.notification.confirm(msg.body,function(btnIndex){
			if (btnIndex == 2){
				// Do nothing, just closing the confirm dialog
			}else if(btnIndex == 1){
				_reportMail(msg);
			}
		},msg.title,buttons);
	}else{
		console.log('Melden: ',JSON.stringify(msg));
	}
	
}
function _remote(msg){
	var http = new XMLHttpRequest();
	var message = msg.title + ':' + msg.body;
	http.open('POST',this.remote,true);
	http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	http.send('timestamp='+ msg.timestamp + '&msg='+message);
}
function isString (arguments,i){
	if(typeof arguments[i] == 'string'){
		return true;
	}else{
		return false;
	}
}
function isObject (arguments,i){
	if(typeof arguments[i] == 'object'){
		return true;
	}else{
		return false;
	}
}
function isFunction (arguments,i){
	if(typeof arguments[i] == 'function'){
		return true;
	}else{
		return false;
	}
}
function Strings (arguments){
	var count = 0;
	for (var i = 0; i < arguments.length; i++){
		if(typeof arguments[i] == 'string'){count++;}
	}
	return count;
}
function gotObject (arguments){
	var gotObj = false;
	for (var i = 0; i < arguments.length; i++){
		if(typeof arguments[i] == 'object'){
			gotObj = arguments[i];
		}
	}
	return gotObj;
}
function gotObject (arguments){
	var gotFunc = false;
	for (var i = 0; i < arguments.length; i++){
		if(typeof arguments[i] == 'function'){
			gotFunc = arguments[i];
		}
	}
	return gotFunc;
}
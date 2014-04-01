/**
 * For instance you have to create a instance of rjs with: var r = new rjs();
 * 
 */
function rjs(/*msg, title, options, callback*/){
	this.log = log;
	this._remote = _remote;
	this._show = _show;
	this._showCallback = _showCallback;

	if(arguments.length == 1 && typeof arguments[0] == 'object'){
		this.remote = arguments[0].remote || null;
		this.level = arguments[0].level || 'silent'; //'silent','debug','onfail'
		this.appName = arguments[0].appName || 'SampleApp';
		this.env = arguments[0].env || 'production';		
	}else{
		console.log('You have to pass some arguments');
	}

}
function log(){
	var msg = {};
	var timestamp = Date.now();
	if (arguments.length == 1 && typeof arguments[0] == 'string'){
		msg.title = this.appName;
		msg.body = arguments[0];
	}else if (arguments.length == 2 && typeof arguments[0] == 'string' && typeof arguments[1] == 'string'){
		msg.title = arguments[0];
		msg.body = arguments[1];
	}
	if (this.remote){this._remote(msg,timestamp);}
	if (this.level == 'debug'){this._show(msg);}
	if (arguments.length == 2 && arguments[0] == 'Error'){this._show(msg);}

	return true;

}
function _save(msg, timestamp){

}
function _report(){

}
function _show(msg){
	if (this.env == 'production'){
		navigator.notification.confirm(msg.body,_showCallback,msg.title,['Melden','OK']);
	}else{
		console.log(JSON.stringify(msg));
	}
	
}
function _showCallback(btnIndex){
	if (btnIndex == 2){
		// Do nothing, just closing the confirm dialog
	}else if(btnIndex == 1){
		console.log('Melden');
	}
	return true;
}
function _remote(msg,timestamp){
	var http = new XMLHttpRequest();
	var message = msg.title + ':' + msg.body;
	http.open('POST',this.remote,true);
	http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	http.send('timestamp='+ timestamp + '&msg='+message);
}
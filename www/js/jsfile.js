
function ajaxRequest () {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4 && ajax.status == 200) {
			var response = ajax.responseText;
			document.getElementById('ajax-test').innerHTML='ajax: '+response;
		}
	};
	ajax.open('POST','http://e25532i4.beget.tech/mobile_app/www/php/phpfile.php');
	ajax.setRequestHeader("Content-type",'application/x-www-form-urlencoded');
	ajax.send('test='+document.cookie);
}
function saveCookie () {
	let cookie=document.getElementById('test-cookie').value;
	document.cookie=cookie;
}
function writeCookie () {
	document.getElementById('cookie-test').innerText= 'js: '+document.cookie;
	ajaxRequest ();
}
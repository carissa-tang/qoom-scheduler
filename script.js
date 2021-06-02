// back button
function backbutton() {
	window.history.back();
}

//add new time
var timei = 0;

function addtime(event) {
	event.preventDefault();

	var parent = this.parentElement.parentElement.parentElement;
	var time = parent.querySelector('#choosetime').cloneNode(true);

	timei++;
	var starttime = time.querySelector('#starttime');
	starttime.name = "Start Time_" + timei + "_" + datei;

	var endtime = time.querySelector('#endtime');
	endtime.name = "End Time_" + timei + "_" + datei;

	var dvContainer = parent.querySelector("#newElementIdTime");
	var div = document.createElement("DIV");
	div.id = "newtime";
	div.appendChild(time);

	var btnRemove = document.createElement("BUTTON");
	btnRemove.type = "button";
	btnRemove.id = "removetimebtn";
	btnRemove.innerHTML = "<img src='/scheduler/delete.svg'/>";
	btnRemove.onclick = function () {
		dvContainer.removeChild(this.parentNode.parentNode);
	};
	var div2 = document.createElement("DIV");
	div2.appendChild(btnRemove);
	div.appendChild(div2);
	dvContainer.appendChild(div);
}
if (document.getElementById('addtimebtn')) 
	document.getElementById('addtimebtn').addEventListener('click', addtime, false);

//add new date
var datei = 0;
if (document.getElementById('originalsection'))
	var originalHTML = document.getElementById('originalsection')
		.innerHTML;

function adddate(event) {
	datei++;
	timei = 0;
	event.preventDefault();
	var $date = document.createElement('div');
	$date.id = "newdate";
	$date.style = document.getElementById('originalsection')
		.style;
	$date.innerHTML = originalHTML;

	var stime = $date.querySelector('#starttime');
	stime = '<input list="starttimelist" id="starttime" type="time" name="Start Time_0_0" required>'
	var etime = $date.querySelector('#endtime');

	var date = $date.querySelector('[name="Date_0"]');
	date.name = "Date_" + datei;

	var starttime = $date.querySelector('[name="Start Time_0_0"]');
	starttime.name = "Start Time_0" + "_" + datei;
	var endtime = $date.querySelector('[name="End Time_0_0"]');
	endtime.name = "End Time_0" + "_" + datei;

	var btnRemove = document.createElement("input");
	btnRemove.type = "button";
	btnRemove.value = "- Remove Date";
	btnRemove.id = "removedatebtn";
	btnRemove.onclick = function () {
		var x = this.parentElement.parentElement.parentElement;
		x.parentElement.removeChild(x);
	};
	var div2 = document.createElement("DIV");
	div2.appendChild(btnRemove);
	$date.querySelector('#addremovebtns')
		.appendChild(div2);

	document.getElementById('availability')
		.appendChild($date);
	$date.querySelector('#addtimebtn')
		.addEventListener('click', addtime, false);
}
if (document.getElementById('adddatebtn'))
	document.getElementById('adddatebtn')
	.addEventListener('click', adddate, false);

//remove time button
var dvContainer = document.getElementById("choosetime");

function removetime() {
	dvContainer.removeChild(this.parent);
}

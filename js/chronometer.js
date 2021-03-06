var start = 0
var end = 0
var diff = 0
var timerID = 0

// Init of the chrono
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	var hr = diff.getHours() - 1

	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" + msec
	}
	else if(msec < 100){
		msec = "0" + msec
	}
	document.getElementById("chrono").innerHTML = hr + ":" + min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}

// Starts the chrono
function StartChrono(){
	start = new Date()
	chrono()
}

// Stop the chrono
function StopChrono(){
	clearTimeout(timerID)
}
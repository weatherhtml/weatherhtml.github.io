function fadeIn() {

    var fadeInElements = document.querySelectorAll(".fade-in");

    for (var i = 0; i < fadeInElements.length; i++) {

        var bottomOfObject = fadeInElements[i].offsetTop + window.innerHeight / fadeInElements[i].offsetTop;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        var windowHeight = window.innerHeight || document.documentElement.offsetHeight;
        var bottomOfWindow = scrollTop + windowHeight;

        if (bottomOfWindow > bottomOfObject) {

        	fadeInElements[i].style.opacity = "1.0";

        }

    };
};

window.addEventListener("scroll", fadeIn);

var more = document.getElementById("more");
var log = document.getElementById("log");
let changeLogCount = 1;

function moreVersions() {
    if (changeLogCount == 1) {

    	more.innerHTML = "Show Less"
    	log.style.display = "block";

    	setTimeout(function() {
    		changeLogCount = 0;
    	}, 100);

    } else {

    	more.innerHTML = "Show More";
    	log.style.display = "none";
    	setTimeout(function() {
    		changeLogCount = 1;
    	}, 100);
    }
}

more.addEventListener("click", moreVersions);

var downloadButton = document.getElementById("downloadButton");
var qr = document.getElementById("QR");

function download() {
	console.log("working?");
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  		window.open("https://www.icloud.com/shortcuts/03fb30a0b7714a9baf893cd0d26d013e", "_blank");
	} else {
		qr.style.display = "block";
	}
}

downloadButton.addEventListener("click", download);
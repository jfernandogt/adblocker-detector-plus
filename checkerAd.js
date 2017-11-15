var adblockerDetector = document.getElementById('adblockerDetector');
var modalTitle = 'Adblock detected!';
var buttonClose = `<span class="close">×</span>`

var modal = `<div id="mpopupBox" class="mpopup">
	    <div class="mpopup-content">
	        <div class="mpopup-head">
	            ${buttonClose}
	            <h2>${modalTitle}</h2>
	        </div>
	        <div class="mpopup-main">
	            <p>This is a simple modal popup using JavaScript and CSS</p>
	            <p>Please the content...</p>
	        </div>
	    </div>
	</div>`;

document.body.innerHTML +=modal;

// get the mPopup
var mpopup = document.getElementById('mpopupBox');

// get the close action element
var close = document.getElementsByClassName("close")[0];

// close the mPopup once close element is clicked
close.onclick = function() {
    mpopup.style.display = "none";
}

if(typeof adblockUnavailable === 'undefined' || adblockUnavailable === false) {
	mpopup.style.display = "block";
}
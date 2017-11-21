var adblockerDetector = document.getElementById('adblockerDetector');
var modalTitle = 'Adblock detected!';
var buttonClose = `<span class="close">X</span>`
var pluginEnabled = false;

var modal = `<div id="mpopupBox" class="mpopup">
	    <div>
	    	${buttonClose}
        	<h2>${modalTitle}</h2>
	        <p>Hi! We have detected you are using an ad-blocker plugin on your browser. Please disable AdBlock on this website.</p>
	    </div>
	</div>`;

document.body.innerHTML +=modal;

// get the mPopup
var mpopup = document.getElementById('mpopupBox');

// get the close action element
var close = document.getElementsByClassName("close")[0];

// close the mPopup once close element is clicked
close.onclick = function() {
    mpopup.className = "mpopup";
}

if((typeof adblockUnavailable === 'undefined' || adblockUnavailable === false) && pluginEnabled) {
	mpopup.className = "mpopup showed";
}
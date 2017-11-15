var adblockerDetector = $('#adblockerDetector');
var modalTitle = 'Adblock detected!';
var buttonClose = `<button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>`

var modal = `<div class="modal fade" id="adblockModal" tabindex="-1" role="dialog" aria-labelledby="adblockModalLabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="adblockModalLabel">${modalTitle}</h5>
	        ${buttonClose}
	      </div>
	      <div class="modal-body">
	        ...
	      </div>
	    </div>
	  </div>
	</div>`;

adblockerDetector.append(modal);

if(typeof adblockUnavailable === 'undefined' || adblockUnavailable === false) {
    $('#adblockModal').modal('show');
}
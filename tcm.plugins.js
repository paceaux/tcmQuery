(function( $ ) {
  $.fn.tcm = function (setTCM) {
  	if ( !setTCM ) {
		var tcmid = this.attr('data-tcm');
		return tcmid;
	} else {
		this.attr('data-tcm', setTCM);
	}
  };
})( jQuery );
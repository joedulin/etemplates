var e = require('element.js').e;

function CloseIcon () {
	var self = e.button('&times;', { attrs: { type: 'button', 'aria-hidden': 'true' }, classes: [ 'close' ] });
	return self;
}

module.exports = CloseIcon;

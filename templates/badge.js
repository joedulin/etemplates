var e = require('element.js').e;

function Badge(text) {
	var self = e.span([], { classes: [ 'badge' ] });
	
	self.setText = function (text) {
		self.inner = [];
		self.append(text);
	};
	
	if (typeof text !== 'undefined') {
		self.append(text);
	}
	
	return self;
}

module.exports = Badge;

var e = require('element.js').e;
function defaults (a,b) {
	return (typeof a !== 'undefined') ? a : b;
}


function Icon (name) {
	name = defaults(name, 'warning-sign');
	var self = e.span([], { classes: [ 'glyphicon', 'glyphicon-' + name ] });

	self.setIcon = function (name) {
		self.classes = [ 'glyphicon', 'glyphicon-'+name ];
	};
	
	return self;
}

module.exports = Icon;

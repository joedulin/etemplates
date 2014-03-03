var e = require('element.js').e;
function defaults(a, b) { return (typeof a !== 'undefined') ? a : b; }

function Row (inner, opts) {
	inner = defaults(inner, []);
	opts = defaults(opts, {});

	var self = e.div(inner, opts);
	self.addClass('row');
	
	return self;
}

module.exports = Row;

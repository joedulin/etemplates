var e = require('element.js').e;
function defaults (a, b) { return (a !== 'undefined') ? a : b; }

function Jumbotron (inner, opts) {
	inner = defaults(inner, []);
	opts = defaults(opts, {});
	var self = e.div(inner, opts);
	self.addClass('jumbotron');
	return self;
}

module.exports = Jumbotron;

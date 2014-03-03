var e = require('element.js').e;
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function Lead (text, opts) {
	text = defaults(text, []);
	opts = defaults(opts, {});
	var self = e.p(text, opts);
	self.addClass('lead');
	return self;
}

module.exports = Lead;

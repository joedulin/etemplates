var e = require('element.js').e;
function defaults (a, b) { return (a !== 'undefined') ? a : b; }

function Label (text, type) {
	text = defaults(text, []);
	type = defaults(type, 'default');
	var self = e.span(text, opts);

	self.setText = function (text) {
		self.inner = [];
		self.append(text);
	};

	self.setType = function (type) {
		self.removeClass([ 'label-default', 'label-primary', 'label-success', 'label-info', 'label-warning', 'label-danger' ]);
		self.addClass('label-'+type);
	};

	self.setType(type);
	return self;
	
}

module.exports = Label;

var e = require('element.js').e;

function Button (text, type, opts) {
	if (opts == null) {
		opts = {};
	}
	var self = e.button(null, opts);
	self.addClass(['btn','btn-default']);

	self.setType = function (type) {
		self.removeClass([ 'btn-default', 'btn-primary', 'btn-success', 'btn-info', 'btn-warning', 'btn-danger', 'btn-link']);
		self.addClass(['btn-',type].join(''));
	};

	self.setSize = function (size) {
		self.removeClass([ 'btn-xs', 'btn-sm', 'btn-md', 'btn-lg' ]);
		self.addClass(['btn-', size].join(''));
	};

	self.setBlock = function (bool) {
		if (bool) {
			self.addClass('btn-block');
		} else {
			self.removeClass('btn-block');
		}
	};

	self.setActive = function (bool) {
		if (bool) {
			self.addClass('active');
		} else {
			self.removeClass('active');
		}
	};

	self.setDisabled = function (bool) {
		if (bool) {
			self.attr('disabled', 'disabled');
		} else {
			delete self.attrs.disabled
		}
	};

	self.setNavbar = function (bool) {
		if (bool) {
			self.addClass('navbar-btn');
		} else {
			self.removeClass('navbar-btn');
		}
	};

	if (typeof text !== 'undefined') {
		self.append(text);
	}
	if (typeof type !== 'undefined') {
		self.setType(type);
	}
	return self;
}

module.exports = Button;

var e = require('element.js').e;
var clone = require('clone');
function ia(arr) { return Array.isArray(arr); }

function Alert (item, type, opts) {
	if (typeof item === 'undefined') { item = []; }
	if (typeof type === 'undefined') { type = 'info'; }
	if (typeof opts === 'undefined') { opts = {}; }

	var self = e.div(item, opts);

	self.setType = function (type) {
		self.removeClass([ 'alert-success', 'alert-info', 'alert-warning', 'alert-danger' ]);
		self.addClass('alert-'+type);
	};

	self.setDismissable = function (bool) {
		if (bool) {
			self.addClass('alert-dismissable');
		} else {
			self.removeClass('alert-dismissable');
		}
	};

	self.app = clone(self.append);

	self.append = function (item) {
		if (ia(item)) {
			for (var i=0; i<item.length; i++) {
				self.append(item[i]);
			}
		} else {
			if (typeof item == 'object' && item.tag == 'a') {
				item.addClass('alert-link');
			}
			self.app(item);
		}
	};

	self.addClass('alert');
	self.setType(type);

	return self;
}

module.exports = Alert;


var e = require('element.js').e;
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function Pager (inner, opts) {
	inner = defaults(inner, []);
	opts = defaults(opts, {});
	
	var self = e.ul(inner, opts);
	self.prepend(e.li(e.a('Previous', '#')));
	self.append(e.li(e.a('Next', '#')));
	self.addClass('pager');

	self.setLeft = function (link, text) {
		if (typeof text == 'undefined') { text = 'Previous'; }
		self.inner[0].inner = [ e.a(text, link) ];
	};

	self.setRight = function (link, text) {
		if (typeof text == 'undefined') { text = 'Next'; }
		self.inner[self.inner.length].inner = [ e.a(text, link) ];
	};

	self.align = function (bool) {
		if (bool) {
			self.inner[0].addClass('previous');
			self.inner[self.inner.length].addClass('next');
		} else {
			self.inner[0].removeClass('previous');
			self.inner[self.inner.length].removeClass('next');
		}
	};

	self.disableLeft = function (bool) {
		if (bool) {
			self.inner[0].addClass('disabled');
		} else {
			self.inner[0].removeClass('disabled');
		}
	};

	self.disableRight = function (bool) {
		if (bool) {
			self.inner[self.inner.length].addClass('disabled');
		} else {
			self.inner[self.inner.length].removeClass('disabled');
		}
	};
}

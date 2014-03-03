var e = require('element.js').e;
function defaults(a, b) { return (typeof a !== 'undefined') ? a : b; }

function Well (inner, opts) { 
	inner = defaults(inner, []);
	opts = defaults(opts, {});

	var self = e.div(inner, opts);
	self.addClass('well');
	
	self.setSize = function (size) {
		self.removeClass(['well-lg','well-sm']);
		switch (size) {
			case 'lg':
			case 'sm':
				self.addClass('well-'+size);
				break;
			default:
				break;
		}
	};

	return self;
}

module.exports = Well;

var e = require('element.js').e;
function defaults (a, b) { return (typeof a == 'undefined') ? b : a; }

function Image (src, alt, opts) {
	src = defaults(src, '');
	alt = defaults(alt, '');
	opts = defaults(opts, null);
	var self = e.img(src, opts);

	self.setRounded = function (bool) {
		if (bool) {
			self.addClass('img-rounded');
		} else {
			self.removeClass('img-rounded');
		}
	};

	self.setCircle = function (bool) {
		if (bool) {
			self.addClass('img-circle');
		} else {
			self.removeClass('img-circle');
		}
	};

	self.setThumbnail = function (bool) {
		if (bool) {
			self.addClass('img-thumbnail');
		} else {
			self.removeClass('img-thumbnail');
		}
	};

	self.setResponsive = function (bool) {
		if (bool) {
			self.addClass('img-responsive');
		} else {
			self.removeClass('img-responsive');
		}
	};
	self.setResponsive(true);
	self.attr('alt', alt);
	return self;
}

module.exports = Image;

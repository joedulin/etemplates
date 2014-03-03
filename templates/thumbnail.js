var e = require('element.js').e;
var clone = require('clone');
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function Thumbnail (opts) {
	defaults(opts, {});
	var self = e.div([], opts);
	self.addClass('thumbnail');
	self.img = e.img();
	self.caption = e.div([], { classes: [ 'caption' ] });
	self.append([ self.img, self.caption ]);
	
	self.origAppend = clone(self.append);
	self.append = function (item) { 
		self.caption.append(item);
	};
	
	self.setImage = function (src, alt) { 
		src = defaults(src, '#');
		alt = defaults(alt, '');
		self.img.attr('src', src);
		self.img.attr('alt', alt);
	};
	
	return self;
}

module.exports = Thumbnail;

var Media = require('../index.js').widgets.media;
var e = require('element.js').e;
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function MediaList (inner, opts) {
	inner = defaults(inner, []);
	opts = defaults(opts, {});
	
	var self = e.ul(inner, opts);
	self.addClass('media-list');

	self.addItem = function (item) {
		if (Array.isArray(item)) {
			for (var i=0; i<item.length; i++) {
				self.append(item[i]);
			}
		} else {
			if (typeof item == 'object' && item.hasClass('media')) {
				if (typeof item.tag !== 'undefined') {
					item.tag = 'li';
				} else {
					item.body.tag = 'li';
				}
				self.append(item);
			} else {
				var wrapper = new Media();
				wrapper.addContent(item);
				wrapper.body.tag = 'li';
				self.append(wrapper);
			}
		}
	};
	
	return self;
}

module.exports = MediaList;

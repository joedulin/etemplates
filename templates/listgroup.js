var e = require('element.js').e;
var clone = require('clone');
var Badge = function () { return e.span([], { classes: ['badge'] }); };
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function ListGroup (inner, opts) {
	inner = defaults(inner, []);
	opts = defaults(opts, {});
	
	var self = e.ul(inner, opts);
	self.addClass('list-group');
	
	self.appendOrig = clone(self.append);

	self.append = function (item) {
		if (Array.isArray(item)) {
			for (var i=0; i<item.length; i++) {
				self.append(item[i]);
			}
		} else {
			if (typeof item == 'object' && item.tag == 'li') {
				item.addClass('list-group-item');
				if (item.inner.length == 1) {
					if (typeof item.inner[0] == 'object' && !item.inner[0].hasClass('badge')) {
						item.prepend(Badge());
					}
					if (typeof item.inner[0] != 'object') {
						item.prepend(Badge());
					}
				}
				self.appendOrig(item);
			} else {
				var wrapper = e.li([Badge(), item], { classes: [ 'list-group-item' ] });
				self.appendOrig(wrapper);
			}
		}
	};

	self.setBadge = function (index, content) {
		self.inner[index].inner[0].inner = (Array.isArray(content)) ? content : [content];
	};
	
	return self;
}

module.exports = ListGroup;

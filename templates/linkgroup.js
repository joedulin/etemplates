var e = require('element.js').e;
var clone = require('clone');
var Badge = function () { return e.span([], { classes: ['badge'] }); };
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function LinkGroup (inner, opts) {
	inner = defaults(inner, []);
	opts = defaults(opts, {});
	
	var self = e.div(inner, opts);
	self.addClass('list-group');

	self.appendOrig = clone(self.append);
	self.append = function (item) {
		if (Array.isArray(item)) {
			for (var i=0; i<item.length; i++) {
				self.append(item[i]);
			}
		} else {
			if (typeof item == 'object') {
				item.addClass('list-group-item');
				if (typeof item.inner[0] == 'object' && !item.inner[0].hasClass('badge')) {
					item.prepend(Badge());
				}
				self.appendOrig(item);
			} else {
				var wrapper = e.span([Badge(), item]);
				wrapper.addClass('list-group-item');
				self.appendOrig(wrapper);
			}
		}
	};

	self.setBadge = function (index, content) {
		self.inner[index].inner[0].inner = (Array.isArray(content)) ? content : [content];
	};

	self.setActive = function (index) {
		for (var i=0; i<this.body.inner.length; i++) {
			self.inner[i].removeClass('active');
		}
		self.inner[index].addClass('active');
	};

	return self;
}

module.exports = LinkGroup;

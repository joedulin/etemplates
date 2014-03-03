var e = require('element.js').e;
var clone = require('clone');
function ia (arr) { return Array.isArray(arr); }

function Breadcrumb () {
	var self = e.ol([], { classes: [ 'breadcrumb' ] });
	
	self.app = clone(self.append);
	self.append = function (item) {
		if (ia(item)) {
			for (var i=0; i<item.length; i++) {
				self.append(item[i]);
			}
		} else {
			if (typeof item == 'object') {
				if (item.tag == 'li') {
					self.app(item);
				} else {
					self.app(e.li(item));
				}
			} else {
				self.app(e.li(item));
			}
		}
	};

	self.setActive = function (index) {
		for (var i=0; i<self.inner.length; i++) {
			self.inner[i].removeClass('active');
		}
		self.inner[index].addClass('active');
	};
	
	return self;
}
module.exports = Breadcrumb;

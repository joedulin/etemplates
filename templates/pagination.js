var e = require('element.js').e;
var clone = require('clone');
function ia (arr) { return Array.isArray(arr); }
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function Pagination (opts) {
	opts = defaults(opts, {});
	var self = e.ul();
	self.lefta = e.a('&laquo;', '#');
	self.leftli = e.li(self.lefta);
	self.righta = e.a('&raquo;', '#');
	self.rightli = e.li(self.righta);
	self.append(self.leftli, self.rightli, opts);
	self.addClass('pagination');

	self.origAppend = clone(self.append);
	
	self.append = function (item) {
		if (ia(item)) {
			for (var i=0; i<item.length; i++) {
				this.append(item[i]);
			}
		} else {
			if (typeof item == 'object') {
				if (item.tag == 'li') {
					self.inner.splice(1,0,item);
				} else {
					self.inner.splice(1,0,e.li(item));
				}
			} else {
				self.inner.splice(1,0,e.li(item));
			}
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
			self.inner[self.inner.length -1].addClass('disabled');
		} else {
			self.inner[self.inner.length -1].removeClass('disabled');
		}
	};

	self.setActive = function (index) {
		for (var i=0; i<this.body.inner.length; i++) {
			self.inner[i].removeClass('active');
		}
		self.inner[index+1].addClass('active');
	};

	self.setSize = function (size) {
		self.removeClass([ 'pagination-xs', 'pagination-sm', 'pagination-md', 'pagination-lg' ]);
		self.addClass('pagination-'+size);
	};

	self.setLeft = function (href, text) {
		text = defaults(text, '&laquo;');
		self.lefta = e.a(text, href);
		self.leftli.inner = [self.lefta];
	};

	self.setRight = function (href, text) {
		text = defaults(text, '&raquo;');
		self.righta = e.a(text, href);
		self.rightli.inner = [self.righta];
	};
	
	return self;
}

module.exports = Pagination;


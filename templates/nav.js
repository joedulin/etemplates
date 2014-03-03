var e = require('element.js').e;
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function Nav (inner, opts) {

	var self = e.ul(inner, opts);
	self.addClass([ 'nav', 'nav-pills' ]);

	self.setType = function (type) {
		switch (type) {
			case 'tabs':
				self.removeClass('nav-pills');
				self.addClass('nav-tabs');
				break;
			case 'pills':
				self.removeClass('nav-tabs');
				self.addClass('nav-pills');
				break;
		}
	};

	self.setNavbar = function (bool) {
		if (bool) {
			self.addClass('navbar-nav');
		} else {
			self.removeClass('navbar-nav');
		}
	};

	self.setStack = function (bool) {
		if (bool) {
			self.addClass('nav-stacked');
		} else {
			self.removeClass('nav-stacked');
		}
	};

	self.setJustified = function (bool) {
		if (bool) {
			self.addClass('nav-justified');
		} else {
			self.removeClass('nav-justified');
		}
	};

	self.addItem = function (item, disabled) {
		if (typeof item == 'object') {
			if (item.tag == 'li') {
				if (disabled) { item.addClass('disabled'); }
				self.append(item);
			} else {
				if (disabled) {
					self.append(e.li(item, { classes: [ 'disabled' ] }));
				} else {
					self.append(e.li(item));
				}
			}
		} else {
			if (disabled) {
				self.append(e.li(item, { classes: [ 'disabled' ]}));
			} else {
				self.append(e.li(item));
			}
		}
	};

	self.setActive = function (index) {
		this.removeActive();
		self.inner[index].addClass('active');
	};

	self.removeActive = function () {
		for (var i=0; i<this.body.inner.length; i++) {
			self.inner[i].removeClass('active');
		}
	};
	
	return self;
}

var e = require('element.js').e;
var uuid = require('node-uuid');
var clone = require('clone');
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function ia (item) {
	return Array.isArray(item);
}
function navbarify (item) {
	switch (item.tag) {
		case 'p':
		case 'span':
			item.tag = 'p';
			item.addClass('navbar-text');
			break;
		case 'button':
			item.addClass('navbar-btn');
			break;
		case 'a':
			item.addClass('navbar-link');
		case 'ul':
			if (item.hasClass('nav')) {
				item.setNavbar(true);
			}
			break;
		case 'form':
			if (!item.hasClass('navbar-form')) {
				item.setNavbar(true);
			}
			break;
	}
	return item;
}

function Navbar (brand, content, opts) {
	brand = defaults(brand, []);
	content = defaults(content, []);
	opts = defaults(opts, {});

	var id = uuid.v4();
	var self = e.nav(opts);
	self.attr('role', 'navigation');
	self.addClass([ 'navbar', 'navbar-default' ]);

	self.header = e.div([], { classes: [ 'navbar-header' ] });
	self.brand = e.a(brand, '#', { classes: [ 'navbar-brand' ] });
	self.hotdogs = e.button([
		e.span('Toggle Navigation', { classes: ['sr-only'] }),
		e.span([], { classes: ['icon-bar'] }),
		e.span([], { classes: ['icon-bar'] }),
		e.span([], { classes: ['icon-bar'] }),
	], {
		attrs: {
			type: 'button',
			'data-toggle': 'collapse',
			'data-target': '#'+id,
		},
		classes: [ 'navbar-toggle' ]
	});
	self.header.append([ self.hotdogs, self.brand ]);
	self.collapse = e.div(content, {
		attrs: { id: id },
		classes: [ 'collapse', 'navbar-collapse' ]
	});
	self.container = e.div([], { classes: [ 'container' ] });
	self.append(self.container);
	self.container.append([ self.header, self.collapse ]);

	self.setBrand = function (brand) {
		self.brand.inner = [];
		self.brand.append(brand);
	};

	self.setId = function (id) {
		self.hotdogs.attr('data-target', '#'+id);
		self.collapse.attr('id', id);
	};
	
	self.appendOrig = clone(self.append);

	self.append = function (item) {
		if (ia(item)) {
			for (var i=0; i<item.length; i++) {
				if (typeof item == 'object') {
					item = navbarify(item);
				}
			}
		} else if (typeof item == 'object') {
			item = navbarify(item);
		}
		self.collapse.append(item);
	};
	
	return self;
}

module.exports = Navbar;

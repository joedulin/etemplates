var e = require('element.js').e;
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function PageHeader (head, subhead, opts) {
	head = defaults(head, []);
	subhead = defaults(subhead, []);
	opts = defaults(opts, {});
	
	var self = e.div([], opts);
	self.addClass('page-header');
	self.subheader = e.small(subhead);
	self.header = e.h1(self.subheader);
	self.append([ self.header ]);

	self.setHeader = function (text) {
		self.header.inner = [];
		self.header.append([ text, self.subheader ]);
	};

	self.setSubheader = function (text) {
		self.subheader.inner = [];
		self.subheader.append(text);
	};
	
	return self;
}

module.exports = PageHeader;

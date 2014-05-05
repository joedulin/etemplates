var e = require('element.js').e;
var clone = require('clone');
function defaults(a, b) { return (typeof a !== 'undefined') ? a : b; }

function Table (headings, opts) {
	headings = defaults(headings, []);
	opts = defaults(opts, {});

	var self = e.table(opts);
	self.addClass([ 'table', 'table-responsive', 'table-hover' ]);
	self.thead = e.thead();
	self.tbody = e.tbody();
	self.append([ self.thead, self.tbody ]);
	self.curRow = e.tr();

	self.striped = function (bool) {
		if (bool) {
			self.addClass('table-striped');
		} else {
			self.removeClass('table-striped');
		}
	};
	self.bordered = function (bool) {
		if (bool) {
			self.addClass('table-bordered');
		} else {
			self.removeClass('table-bordered');
		}
	};
	self.hover = function (bool) {
		if (bool) {
			self.addClass('table-hover');
		} else {
			self.removeClass('table-hover');
		}
	};
	self.condensed = function (bool) {
		if (bool) {
			self.addClass('table-condensed');
		} else {
			self.removeClass('table-condensed');
		}
	};
	self.responsive = function (bool) {
		if (bool) {
			self.addClass('table-responsive');
		} else {
			self.removeClass('table-responsive');
		}
	};
	self.rowContext = function (type, rem) {
		if (!rem) {
			self.curRow.addClass(type);
		} else {
			self.curRow.removeClass(type);
		}
	};
	self.addTD = function (data) {
		if (typeof data == 'object') {
			self.curRow.append(data);
		} else {
			self.curRow.append(e.td(data));
		}
	};
	self.nextRow = function () {
		self.tbody.append(clone(self.curRow));
		self.curRow = e.tr();
	};
	self.addTH = function (heading) {
		if (typeof heading == 'object') {
			self.thead.append(heading);
		} else {
			self.thead.append(e.th(heading));
		}
	};

	for (var i=0, h; h = headings[i]; i++) {
		self.addTH(h);
	}

	return self;
};

module.exports = Table;

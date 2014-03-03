var e = require('element.js').e;

function BtnGroup () {
	var self = e.div([], { classes: [ 'btn-group' ] });

	self.setSize = function (size) {
		self.removeClass([ 'btn-group-xs', 'btn-group-sm', 'btn-group-md', 'btn-group-lg' ]);
		self.addClass(['btn-group-',size].join(''));
	};

	self.setVertical = function (bool) {
		if (bool) {
			self.addClass('btn-group-vertical');
		} else {
			self.removeClass('btn-group-vertical');
		}
	};

	self.setJustified = function (bool) {
		if (bool) {
			self.addClass('btn-group-justified');
		} else {
			self.removeClass('btn-group-justified');
		}
	};
	
	return self;
}

module.exports = BtnGroup;

var e = require('element.js').e;
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function ProgressBar (perc, opts) {
	perc = defaults(perc, 0);
	opts = defaults(opts, {});
	
	var self = e.div([], opts);
	self.addClass('progress');
	self.extra = '';
	self.sronly = e.span(perc + '%', { classes: [ 'sr-only' ] });
	self.bar = e.div([self.sronly], {
		attrs: {
			'role': 'progressbar',
			'aria-valuenow': perc,
			'aria-valuemin': '0',
			'aria-valuemax': '100'
		},
		classes: [ 'progress-bar', 'progress-bar-info' ],
		styles: { width: perc + '%' }
	});
	self.append(bar);
	
	self.setType = function (type) {
		self.bar.removeClass([ 'progress-bar-success', 'progress-bar-info', 'progress-bar-warning', 'progress-bar-danger' ]);
		self.bar.addClass('progress-bar-'+type);
		switch (type) {
			case 'success':
				self.extra = ' (success)';
				break;
			case 'warning':
				self.extra = ' (warning)';
				break;
			case 'danger':
				self.extra = ' (danger)';
				break;
			default:
				self.extra = '';
				break;
		}
		self.sronly.inner = [ self.bar.css('width') + '%' + self.extra ];
	};

	self.setPerc = function (num) {
		self.bar.css('width',num+'%');
		self.bar.attr('aria-valuenow',num);
		self.sronly.inner = [ num + '%' + self.extra ];
	};

	self.setStriped = function (bool) {
		if (bool) {
			self.addClass('progress-striped');
		} else {
			self.removeClass('progress-striped');
		}
	};

	self.setActive = function (bool) {
		if (bool) {
			self.setStriped(true);
			self.addClass('active');
		} else {
			self.removeClass('active');
		}
	};

	return self;
}

module.exports = ProgressBar;


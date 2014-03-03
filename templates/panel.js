var e = require('element.js').e;
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function Panel (title, body, opts) {
	title = defaults(title, []);
	body = defaults(body, []);
	opts = defaults(opts, {});
	var self = e.div([],opts);
	self.addClass([ 'panel', 'panel-default' ]);
	self.phead = e.div(title, { classes: [ 'panel-heading' ] });
	self.pbody = e.div(body, { classes: [ 'panel-body' ] });
	self.append([ self.phead, self.pbody ]);

	self.addItem = function (item) {
		self.pbody.append(item);
	};

	self.setTitle = function (text) {
		self.phead.inner = [];
		self.phead.append(text);
	};

	self.setFooter = function (text) {
		if (typeof this.e.pfoot == 'undefined') {
			self.pfoot = e.div([], { classes: [ 'panel-footer' ] });
			self.append(self.pfoot);
		}
		self.pfoot.inner = [];
		self.pfoot.append(text);
	};

	self.setType = function (type) {
		self.removeClass([ 'panel-default', 'panel-primary', 'panel-success', 'panel-info', 'panel-warning', 'panel-danger' ]);
		self.addClass('panel-'+type);
	};

	return self;
}

module.exports = Panel;

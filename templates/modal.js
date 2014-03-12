var e = require('element.js').e;
var uuid = require('node-uuid');
var close = function () {
	return e.button('&times;', {
		attrs: {
			'data-dismiss': 'modal',
			'aria-hidden': 'true',
			'type': 'button'
		}, classes: [ 'close' ]
	});
};
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function Modal (heading, content, opts) {
	heading = defaults(heading, []);
	content = defaults(content, []);
	opts = defaults(opts, {});

	var h4id = uuid.v4();
	var self = e.div([], opts);
	self.attr('tabindex', '-1');
	self.attr('role', 'dialog');
	self.attr('aria-labelledby', h4id);
	self.attr('aria-hidden', 'true');
	self.addClass('modal', 'fade');

	self.title = e.h4(heading, { attrs: {id: h4id }, classes: [ 'modal-title' ] });
	self.head = e.div([ close(), self.title ], { classes: [ 'modal-header' ] });
	self.body = e.div(content, { classes: [ 'modal-body' ] });
	self.foot = e.div([], { classes: [ 'modal-footer' ] });
	self.content = e.div([ self.head, self.body, self.foot ], { classes: [ 'modal-content' ] });
	self.dialog = e.div(self.content, { classes: [ 'modal-dialog' ] });

	self.append(self.dialog);

	self.setTitle = function (text) {
		self.title.inner = [];
		self.title.append(text);
	};

	self.setFooter = function (item) {
		self.foot.inner = [];
		self.foot.append(item);
	};

	self.removeClose = function () {
		self.head.inner.shift();
	};

	return self;
}

module.exports = Modal;

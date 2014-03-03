var e = require('element.js').e;

function InputGroup (opts) {

	var self = e.div([], { classes: [ 'input-group' ]});
	self.pre = e.span([], { classes: [ 'input-group-addon' ]});
	self.post = e.span([], { classes: [ 'input-group-addon' ]});
	self.input = e.input('text');
	self.append([ self.pre, self.input, self.post ]);

	self.setType = function (type) {
		switch (type) {
			case 'button':
				self.pre.removeClass('input-group-addon');
				self.pre.addClass('input-group-btn');
				self.post.removeClass('input-group-addon');
				self.post.addClass('input-group-btn');
				break;
			case 'button-dropdown':
				self.pre.tag = 'div';
				self.post.tag = 'div';
				self.setType('button');
				break;
			case 'none':
			default:
				self.pre.tag = 'span';
				self.post.tag = 'span';
				self.pre.removeClass('input-group-btn');
				self.post.removeClass('input-group-btn');
				self.pre.addClass('input-group-addon');
				self.post.addClass('input-group-addon');
				break;
		}
	};

	self.setPre = function (element) {
		if (Array.isArray(element)) {
			self.pre.inner = element;
		} else {
			self.pre.inner = [ element ];
		}
	};

	self.setPost = function (element) {
		if (Array.isArray(element)) {
			self.post.inner = element;
		} else {
			self.post.inner = [ element ];
		}
	};

	self.setInput = function (element) {
		element.addClass('form-control');
		self.input = element;
	};

	self.setSize = function (size) {
		self.removeClass([ 'input-group-xs', 'input-group-sm', 'input-group-md', 'input-group-lg' ]);
		self.addClass(['input-group-', size].join(''));
	};

	return self;
}

module.exports = InputGroup;

var e = require('element.js').e;
var caret = require('./caret.js');
var btn = require('./button.js');
var uuid = require('node-uuid');

function disable(el, bool) {
	if (bool) {
		el.addClass('disabled');
	} else {
		el.removeClass('disabled');
	}
}

function Dropdown () {
	var thisid = uuid.v4();
	var self = e.div([], { classes: [ 'dropdown' ] });
	self.parts = {};
	
	var button = self.parts.button = new btn();
	button.addClass('dropdown-toggle');
	button.attr('type', 'button');
	button.attr('data-toggle', 'dropdown');
	button.attr('id', thisid);
	
	var ul = self.parts.ul = e.ul();
	ul.addClass('dropdown-menu');
	ul.attr('role', 'menu');
	ul.attr('aria-labelledby', thisid);
	
	self.append([ button, ul ]);
	
	self.disable = function (el, bool) {
		if (bool) {
			el.addClass('disabled');
		} else {
			el.removeClass('disabled');
		}
	};

	self.setType = function (type) {
		switch (type) {
			case 'a':
				button.tag = 'a';
				button.removeClass(['btn', 'btn-default', 'btn-primary', 'btn-success', 'btn-warning', 'btn-danger', 'btn-link']);
				button.removeAttr('type');
				button.attr('href','#');
				self.removeClass('btn-group');
				self.addClass('dropdown');
				break;
			case 'button':
				button.tag = 'button';
				button.attr('type','button');
				button.removeAttr('href');
				button.addClass(['btn','btn-default']);
				self.addClass('btn-group');
				self.removeClass('dropdown');
				break;
			case 'nav':
				self.tag = 'li';
				self.setType('a');
				break;
		}
	};

	self.setLabel = function (text, noCaret) {
		if (noCaret) {
			button.inner = [ text ];
		} else {
			button.inner = [ text, new caret() ];
		}
	};

	self.setCaret = function (bool) {
		if (bool) {
			button.inner = [ button.inner[0], caret() ];
		} else {
			button.inner = [ button.inner[0] ];
		}
	};

	self.addItem = function (item, disabled) {
		if (typeof item == 'object') {
			if (item.tag == 'li') {
				item.attr('role','presentation');
				for (var i=0; i<item.inner.length; i++) {
					var el = item.inner[0];
					el.attr('role', 'menuitem');
					el.attr('tabindex', '-1');
				}
				ul.append(item);
				self.disable(item, disabled);
			} else {
				var li = e.li();
				li.attr('role', 'presentation');
				item.attr('role','menuitem');
				item.attr('tabindex', '-1');
				li.append(item);
				ul.append(li);
				self.disable(li, disabled);
			}
		} else {
			var li = e.li();
			var span = e.span(item);
			li.attr('role', 'presentation');
			span.attr('role','menuitem');
			span.attr('tabindex', '-1');
			li.append(span);
			ul.append(li);
			self.disable(li, disabled);
		}
	};

	self.addDivider = function () {
		ul.append(e.li([], {
			attrs: { role: 'presentation' },
			classes: [ 'divider' ]
		}));
	};

	self.align = function (direction) {
		ul.removeClass(['pull-left','pull-right']);
		ul.addClass(['pull-',direction].join(''));
	};

	self.addHeader = function (text) {
		ul.append(e.li([text], {
			attrs: { role: 'presentation' },
			classes: [ 'dropdown-header' ]
		}));
	};

	self.setId = function (id) {
		button.attr('id', id);
		ul.attr('aria-labelledby',id);
	};
	
	return self;
}

module.exports = Dropdown;

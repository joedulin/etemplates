var e = require('element.js').e;
var uuid = require('node-uuid');

function defaults (a,b) {
	return (typeof a !== 'undefined') ? a : b;
}

function Form (method, action) {
	method = defaults(method, 'GET');
	action = defaults(action, '#');
	
	var self = e.form({ attrs: { role: 'form' }});
	self.attr('method', method);
	self.attr('action', action);

	self.addFI = function (label, input) {
		if (typeof label == 'object') {
			if (typeof label.attr('for') == 'undefined') {
				if (typeof input.attr('id') == 'undefined') {
					var id = uuid.v4();
					label.attr('for',id);
					input.attr('id',id);
				} else {
					label.attr('for',input.attr('id'));
				}
			}
		} else {
			label = e.label(label);
			if (typeof input.attr('id') == 'undefined') {
				var id = uuid.v4();
				label.attr('for',id);
				input.attr('id',id);
			} else {
				label.attr('for',input.attr('id'));
			}
		}
		if (typeof input == 'object') {
			if (input.tag == 'input') {
				input.addClass('form-control');
			} else {
				var list = input.find('input');
				list = list.concat(input.find('select'));
				for (var i=0, el; el=list[i]; i++) {
					el.addClass('form-control');
				}
			}
		}
		if (input.type == 'checkbox' || input.type == 'radio') {
			label.inner = [input, label.inner[0]];
			self.append(e.div(label, { classes: ['form-group'] }));
		} else {
			self.append(e.div([ label, input ], { classes: ['form-group'] }));
		}
	};

	self.setHorizontal = function (bool) {
		if (bool) {
			self.addClass('form-horizontal');
		} else {
			self.removeClass('form-horizontal');
		}
	};

	self.setInline = function (bool) {
		if (bool) {
			self.addClass('form-inline');
		} else {
			self.removeClass('form-inline');
		}
	};

	self.setNavbar = function (bool, direction) {
		defaults(direction, 'left');
		if (bool) {
			self.addClass([ 'navbar-form', 'navbar-'+direction ]);
		} else {
			self.removeClass([ 'navbar-form', 'navbar-left', 'navbar-right' ]);
		}
	};
	
	return self;
}

module.exports = Form;

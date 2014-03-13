var e = require('element.js').e;
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function Column (inner, size, offset, opts) {
	inner = defaults(inner, []);
	size = defaults(size, { all: 12 });
	offset = defaults(offset, {});
	opts = defaults(opts, {});
	var self = e.div([ inner ], opts);

	self.setSize = function (size, num) {
		if (typeof size === 'object') {
			for (s in size) {
				self.setSize(s,size[s]);
			}
		} else {
			switch (size) {
				case 'all':
					var remClasses = [];
					for (var i=0; i<self.classes.length; i++) {
						if (self.classes[i].search(/^col....[0-9]/) > -1) {
							remClasses.push(self.classes[i]);
						}
					}
					self.removeClass(remClasses);
					self.addClass([
						'col-xs-' + num,
						'col-sm-' + num,
						'col-md-' + num,
						'col-lg-' + num
					]);
					break;
				case 'phone':
					var remClasses = [];
					for (var i=0; i<self.classes.length; i++) {
						if (self.classes[i].search(/^col-[x,s][s,m]-[0-9]/) > -1) {
							remClasses.push(self.classes[i]);
						}
					}
					self.removeClass(remClasses);
					self.addClass([
						'col-xs-' + num,
						'col-sm-' + num
					]);
					break;
				case 'desktop':
					var remClasses = [];
					for (var i=0; i<self.classes.length; i++) {
						if (self.classes[i].search(/^col-[m,l][d,g]-[0-9]/) > -1) {
							remClasses.push(self.classes[i]);
						}
					}
					self.removeClass(remClasses);
					self.addClass([
						'col-md-' + num,
						'col-lg-' + num
					]);
					break;
				case 'xs':
					var remClasses = [];
					for (var i=0; i<self.classes.length; i++) {
						if (self.classes[i].search(/^col-xs-[0-9]/) > -1) {
							remClasses.push(self.classes[i]);
						}
					}
					self.removeClass(remClasses);
					self.addClass('col-xs-' + num);
					break;
				case 'sm':
					var remClasses = [];
					for (var i=0; i<self.classes.length; i++) {
						if (self.classes[i].search(/^col-sm-[0-9]/) > -1) {
							remClasses.push(self.classes[i]);
						}
					}
					self.removeClass(remClasses);
					self.addClass('col-sm-' + num);
					break;
				case 'md':
					var remClasses = [];
					for (var i=0; i<self.classes.length; i++) {
						if (self.classes[i].search(/^col-md-[0-9]/) > -1) {
							remClasses.push(self.classes[i]);
						}
					}
					self.removeClass(remClasses);
					self.addClass('col-md-' + num);
					break;
				case 'lg':
					var remClasses = [];
					for (var i=0; i<self.classes.length; i++) {
						if (self.classes[i].search(/^col-md-[0-9]/) > -1) {
							remClasses.push(self.classes[i]);
						}
					}
					self.removeClass(remClasses);
					self.addClass('col-lg-' + num);
					break;
			}
		}
	};

	self.setOffset = function (size, num) {
		if (typeof size === 'object') {
			for (s in size) {
				self.setOffset(s,size[s]);
			}
		} else {
			switch (size) {
				case 'all':
					var remClasses = [];
					for (var i=0; i<self.classes.length; i++) {
						if (self.classes[i].search(/^col-..-offset-[0-9]/) > -1) {
							remClasses.push(self.classes[i]);
						}
					}
					self.removeClass(remClasses);
					self.addClass([
						'col-xs-offset-' + num,
						'col-sm-offset-' + num,
						'col-md-offset-' + num,
						'col-lg-offset-' + num
					]);
					break;
				case 'phone':
					self.addClass([
						'col-xs-offset-' + num,
						'col-sm-offset-' + num
					]);
					break;
				case 'desktop':
					self.addClass([
						'col-md-offset-' + num,
						'col-lg-offset-' + num
					]);
					break;
				case 'xs':
					self.addClass('col-xs-offset-' + num);
					break;
				case 'sm':
					self.addClass('col-sm-offset-' + num);
					break;
				case 'md':
					self.addClass('col-md-offset-' + num);
					break;
				case 'lg':
					self.addClass('col-lg-offset-' + num);
					break;
				default:
					self.addClass('col-md-offset-' + num);
					break;
			}
		}
	};

	self.setPush = function (size, num) {
		if (typeof size === 'object') {
			for (s in size) {
				self.setPush(s,size[s]);
			}
		} else {
			switch (size) {
				case 'all':
					self.addClass([
						'col-xs-push-' + num,
						'col-sm-push-' + num,
						'col-md-push-' + num,
						'col-lg-push-' + num
					]);
					break;
				case 'phone':
					self.addClass([
						'col-xs-push-' + num,
						'col-sm-push-' + num
					]);
					break;
				case 'desktop':
					self.addClass([
						'col-md-push-' + num,
						'col-lg-push-' + num
					]);
					break;
				case 'xs':
					self.addClass('col-xs-push-' + num);
					break;
				case 'sm':
					self.addClass('col-sm-push-' + num);
					break;
				case 'md':
					this.body.addClass('col-md-push-' + num);
					break;
				case 'lg':
					self.addClass('col-lg-push-' + num);
					break;
				default:
					self.addClass('col-md-push-' + num);
					break;
			}
		}
	};

	self.setPull = function (size, num) {
		if (typeof size === 'object') {
			for (s in size) {
				self.setPull(s,size[s]);
			}
		} else {
			switch (size) {
				case 'all':
					self.addClass([
						'col-xs-pull-' + num,
						'col-sm-pull-' + num,
						'col-md-pull-' + num,
						'col-lg-pull-' + num
					]);
					break;
				case 'phone':
					self.addClass([
						'col-xs-pull-' + num,
						'col-sm-pull-' + num
					]);
					break;
				case 'desktop':
					self.addClass([
						'col-md-pull-' + num,
						'col-lg-pull-' + num
					]);
					break;
				case 'xs':
					self.addClass('col-xs-pull-' + num);
					break;
				case 'sm':
					self.addClass('col-sm-pull-' + num);
					break;
				case 'md':
					self.addClass('col-md-pull-' + num);
					break;
				case 'lg':
					self.addClass('col-lg-pull-' + num);
					break;
				default:
					self.addClass('col-md-pull-' + num);
					break;
			}
		}
	};
	
	self.setSize(size);
	self.setOffset(offset);
	
	return self;
}

module.exports = Column;

var e = require('element.js').e;
function defaults (a, b) { return (typeof a !== 'undefined') ? a : b; }

function Media (opts) {
	opts = defaults(opts, {});
	
	var self = e.div([], opts);
	self.append('media');
	
	self.heading = e.h4([], { classes: [ 'media-heading' ] });
	self.content = e.div([self.heading], { classes: [ 'media-body' ] });
	self.media = e.a([], '#', { classes: [ 'pull-left' ] });
	
	self.append([ self.media, self.content ]);

	self.setMedia = function (item) {
		if (typeof item == 'object') {
			item.addClass('media-object');
		} else {
			item = e.p(item, { classes: [ 'media-object' ]});
		}
		self.media.inner = [ item ];
	};

	self.setHeading = function (text) {
		self.heading.inner = [ text ];
	};

	self.addContent = function (item) {
		if (Array.isArray(item)) {
			for (var i=0; i<item.length; i++) {
				self.addContent(item[i]);
			}
		} else {
			self.content.append(item);
		}
	};

	self.mediaLeft = function (bool) {
		if (bool) {
			self.media.removeClass('pull-right');
			self.media.addClass('pull-left');
		} else {
			self.media.addClass('pull-right');
			self.media.removeClass('pull-left');
		}
	};

	self.mediaRight = function (bool) {
		if (bool) {
			this.mediaLeft(false);
		} else {
			this.mediaRight(true);
		}
	};
	
	return self;
}

module.exports = Media;

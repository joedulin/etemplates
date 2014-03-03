var e = require('element.js').e;
var uuid = require('node-uuid');

function Carousel () {
	var id = uuid.v4();
	var parts = {};
	parts.list = e.ol([], { classes: [ 'carousel-indicators' ] });
	parts.slides = e.div([], { classes: [ 'carousel-inner' ] });
	parts.controlL = e.a(
		e.span([], { classes: [ 'glyphicon', 'glyphicon-chevron-left' ] }),
		'#'+id,
		{ attrs: { 'data-slide': 'prev' }, classes: [ 'left', 'carousel-control' ] }
	);
	parts.controlR = e.a(
		e.span([], { classes: [ 'glyphicon', 'glyphicon-chevron-right' ] }),
		'#'+id,
		{ attrs: { 'data-slide': 'next' }, classes: [ 'right', 'carousel-control' ] }
	);
	var self = e.div([
		parts.list,
		parts.slides,
		parts.controlL,
		parts.controlR
	], {
		attrs: { 'id': id, 'data-ride': 'carousel' },
		classes: [ 'carousel', 'slide' ]
	});
	self.e = parts;

	self.addSlide = function (item) {
		self.e.slides.append(e.div(item, { classes: [ 'item' ] }));
		self.e.list.append(e.li([], { attrs: { 'data-target': '#'+id } }));
		for (var i=0, slide; slide=self.e.list.inner[i]; i++) {
			slide.attr('data-slide-to', i);
		}
	};

	self.setActive = function (index) {
		for (var i=0; i<this.e.list.inner.length; i++) {
			self.e.list.inner[i].removeClass('active');
			self.e.slides.inner[i].removeClass('active');
		}
		self.e.list.inner[index].addClass('active');
		self.e.slides.inner[index].addClass('active');
	};

	self.setCaption = function (index, text) {
		var caption = self.e.slides.inner[index].find('.carousel-caption');
		if (caption.length == 0) {
			var div = e.div([], { classes: [ 'carousel-caption' ] });
			div.append(text);
			self.e.slides.inner[index].append(div);
		} else {
			caption[0].inner = [];
			caption[0].append(text);
		}
	};
	
	return self;
}

module.exports = Carousel;

var e = require('element.js').e;

function BtnToolbar () {
	var self = e.div([], { attrs: { role: 'toolbar' }, classes: [ 'btn-toolbar' ]});
	return self;
}

module.exports = BtnToolbar;

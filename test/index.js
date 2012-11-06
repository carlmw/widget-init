(function () {
var opts, el, domFixture = document.getElementById('fixture');

// A simple test widget
require.register("test-widget/index.js", function(module){
  module.exports = function (targetEl, targetOpts) {
    el = targetEl;
    opts = targetOpts;
  };
});

describe('widgitInit(document)', function () {

  beforeEach(function () {
    domFixture.innerHTML = '<div id="target" data-require="test-widget" data-foo-bar="baz"></div>';
  });

  afterEach(function () {
    el = opts = undefined;
  });

  it('should initialise the module with the correct arguments', function () {
    require('widget-init')(domFixture);

    expect(el).to.be(document.getElementById('target'));
    expect(opts).to.eql({require: 'test-widget', fooBar: 'baz'});
  });

});

}());

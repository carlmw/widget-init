require.register("test-widget/index.js", function(module, exports, require){
  module.exports = function (el, opts) {
    var values = [];
    for(var prop in opts) values.push(prop + ': ' + opts[prop]);
    el.innerHTML = 'SUCCESS {' + values.join(', ') + '}';
    el.style.backgroundColor = 'green';
  };
});

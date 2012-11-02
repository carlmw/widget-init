require.register("test-widget/index.js", function(module, exports, require){
  module.exports = function (el, opts) {
    el.innerHTML = 'SUCCESS';
    el.style.backgroundColor = 'green';
    el.innerHTML += ' opts:  ' + JSON.stringify(opts);
  };
});

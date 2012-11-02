require.register("test-widget/index.js", function(module, exports, require){
  module.exports = function (el) {
    el.innerHTML = 'SUCCESS';
    el.style.backgroundColor = 'green';
  };
});

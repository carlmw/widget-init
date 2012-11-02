module.exports = function (root) {
  var elements = root.querySelectorAll('[data-require]');

  for(var i = 0, l = elements.length; i < l; i++) initialiseWidget(elements[i]);
};

function initialiseWidget (el) {
  require('../' + el.getAttribute('data-require'))(el);
}

module.exports = function (root) {
  var elements = root.querySelectorAll
    ? root.querySelectorAll('[data-require]')
    : legacyAttributeSelector(root);

  for(var i = 0, l = elements.length; i < l; i++) initialiseWidget(elements[i]);
};

function initialiseWidget (el) {
  require('../' + el.getAttribute('data-require'))(el, (el.dataset) ? el.dataset : legacyData(el));
}

function legacyAttributeSelector (root) {
  var all = root.getElementsByTagName('*'),
      results = [];

  for(var i = 0, l = all.length; i < l; i++) {
    if (all[i].getAttribute('data-require')) results.push(all[i]);
  }

  return results;
}

var camelRE = /-([\da-z])/gi,
    dataRE = /data\-/;

function legacyData (el) {
  var data = {},
      attrs = el.attributes;

  for(var i = 0, l = attrs.length; i < l; i++){
    if (dataRE.test(attrs[i].name)) {
      data[attrs[i].name.replace('data-', '').replace(camelRE, replaceCamel)] = el.getAttribute(attrs[i].name);
    }
  }
  
  return data;
}

function replaceCamel (all, ch) {
  return (ch + '').toUpperCase();
}

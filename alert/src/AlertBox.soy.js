/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from AlertBox.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AlertBox.
 * @public
 */

goog.module('AlertBox.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = Soy.getTemplate('Alert.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'alert-container');
    var alertList21 = opt_data.alerts;
    var alertListLen21 = alertList21.length;
    for (var alertIndex21 = 0; alertIndex21 < alertListLen21; alertIndex21++) {
      var alertData21 = alertList21[alertIndex21];
      $templateAlias1({body: alertData21.body, dismissable: alertData21.dismissable, type: alertData21.type}, null, opt_ijData);
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'AlertBox.render';
}

exports.render.params = ["alerts"];
exports.render.types = {"alerts":"any"};
templates = exports;
return exports;

});

class AlertBox extends Component {}
Soy.register(AlertBox, templates);
export { AlertBox, templates };
export default templates;
/* jshint ignore:end */

'use strict';

/**
 * The soy template functions are automatically exported by `Alert.soy.js`.
 */
import templates from './Alert.soy';
import Component from 'metal-component';
import { core } from 'metal';
import dom from 'metal-dom';
import Soy from 'metal-soy';

class Alert extends Component {
	/**
	 * Dismisses the alert.
	 * @param  {!Event} event optional
	 */
	hide(event) {
		this.visible = false;

		console.log("Alert hidden: ", event.delegateTarget);
	}

	/**
	 * Validator to check alert type
	 * @param {string} val the value of the alert type
	 * @return {Boolean} if alert type matches, return true
	 */
	static isAlertType(val) {
		return val.match(/^(success|info|warning|danger)$/);
	}
}

// This line is declaring that `Alert` will be using the given soy templates for
// rendering itself.
Soy.register(Alert, templates);

/**
 * Alert State
 * @type {!Object}
 * @static
 */
Alert.STATE = {
	/**
	 * Body content
	 * @type {string}
	 */
	body: {
		validator: core.isString,
		writeOnce: true
	},

	/**
	 * If the alert is dismissable with a close button.
	 * @type {boolean}
	 */
	dismissable: {
		validator: core.isBoolean,
		value: true
	},

	/**
	 * The type of alert, i.e. success, info, warning, danger
	 * @type {string}
	 */
	type: {
		validator: Alert.isAlertType
	}
}

export default Alert;

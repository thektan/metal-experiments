'use strict';

/**
 * The soy template functions are automatically exported by `Alert.soy.js`.
 */
import templates from './Alert.soy';
import Component from 'metal-component';
import dom from 'metal-dom';
import Soy from 'metal-soy';

class Alert extends Component {
	/**
	 * Adds additional function to the alert constructor.
	 * @param config
	 */
	constructor(config) {
		super(config);

		dom.append(document.getElementById('alert-container'), this.element);
	}

	/**
	 * Dismisses the alert.
	 * @param  {!Event} event optional
	 */
	hide(event) {
		this.visible = false;

		console.log("Alert hidden: ", event.delegateTarget);
	}
}

// This line is declaring that `Alert` will be using the given soy templates for
// rendering itself.
Soy.register(Alert, templates);

export default Alert;

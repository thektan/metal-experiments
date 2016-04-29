'use strict';

/**
 * The soy template functions are automatically exported by `Alert.soy.js`.
 */
import templates from './Alert.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';

class Alert extends Component {
	/**
	 * Dismisses the alert.
	 * @param  {!Event} event
	 */
	hide() {
		this.visible = false;
	}
}
// This line is declaring that `Alert` will be using the given soy templates for
// rendering itself.
Soy.register(Alert, templates);

export default Alert;

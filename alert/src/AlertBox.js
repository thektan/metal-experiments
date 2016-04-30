'use strict';

import templates from './AlertBox.soy';
import Component from 'metal-component';
import Soy from 'metal-soy';
import './Alert';

class AlertBox extends Component {
}

Soy.register(AlertBox, templates);

export default AlertBox;
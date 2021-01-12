import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';
import Ember from 'ember';
import layout from '../templates/components/paper-data-table-cell';

const {
    Handlebars: { Utils: { escapeExpression } }
} = Ember;

export default Component.extend({
	layout,
	tagName: 'td',
	classNameBindings: ['numeric:md-numeric','edit:md-clickable'],
	attributeBindings: ['style','colspan'],
	classNames: ['md-cell'],
	edit: false,
	showEdit: false,
	width: null,
	style: computed('width', function() {
		let width = escapeExpression(this.width);
		if (width) {
			return htmlSafe(`width: ${width}px;`);
		} else {
			return undefined;
		}
	}),
	click() {
    if (this.onClick) { this.onClick() }
		this.set('showEdit',true);
	},
	actions: {
		close() {
      if (this.onClose) { this.onClose(this) }
		},
		toggleEdit() {
			this.toggleProperty('showEdit');
		}
	}
});

import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';
import layout from '../templates/components/paper-data-table-row';

export default Component.extend({
	layout,
	tagName: 'tr',
	classNames: ['md-row'],
	showEdit: false,
	attributeBindings: ['style', 'disabled'],
	style: computed('edit', 'onClick', function() {
		if (this.onClick || this.edit) {
			return htmlSafe('cursor: pointer;');
		}
		return htmlSafe('');
	}),

	click() {
		if (this.onClick) { this.onClick() }
		if (this.edit) {
			this.set('showEdit',true);
		}
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

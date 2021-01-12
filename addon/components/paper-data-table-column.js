import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';
import Ember from 'ember';
import layout from '../templates/components/paper-data-table-column';

const {
    Handlebars: { Utils: { escapeExpression } }
} = Ember;

export default Component.extend({
	layout,
	tagName: 'th',
	classNameBindings: ['numeric:md-numeric','active:md-active','sortProp:md-sort'],
	attributeBindings: ['style','colspan'],
	classNames: ['md-column'],
	currentProp: null,
	sortProp: null,
	sortDir: null,

	style: computed('width', function() {
		let width = escapeExpression(this.width);
		if (width) {
			return htmlSafe(`width: ${width}px;`);
		}
		return undefined;
	}),

	active: computed('sortProp', 'currentProp', function() {
		return this.sortProp && this.sortProp === this.currentProp;
	}).readOnly(),

	click() {
		let {
			sortProp,
			sortDir,
			active } = this;

		if (!sortProp) {
			return;
		}

		let newSortDir = sortDir;
		if (!active) {
			newSortDir = 'asc';
		} else {
			newSortDir = sortDir === 'asc' ? 'desc': 'asc';
		}

		this.sortChanged(sortProp, newSortDir);
		this.set('sortDir', newSortDir);
	},
});

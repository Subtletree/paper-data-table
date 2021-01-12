import { equal } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/paper-data-table-pagination';

export default Component.extend({
	layout,
	tagName: 'md-table-pagination',
	classNames: ['md-table-pagination'],
	startOffset: computed('page', 'limit', function() {
		return Math.max((this.page - 1) * this.limit + 1, 1); // 1-based index
	}),
	endOffset: computed('startOffset', 'limit', 'total', function() {
		let endOffset = this.startOffset + this.limit;
		let total = this.total;
		return total ? Math.min(endOffset, total) : endOffset;
	}),
	disableDecrement: equal('page', 1),
	disableIncrement: computed('page', 'pages.[]', function() {
		return this.page === this.get('pages.lastObject');
	})
});

import template from '../templates/components/paper-table-select';
import PaperSelect from 'ember-paper/components/paper-select/component';
import { tagName, layout } from '@ember-decorators/component';

@tagName('')
@layout(template)
export default class PaperTableSelect extends PaperSelect {}

import {LitElement} from 'lit';

import {LoggerMixin} from './mixins/logging.js';

/**
 * Alwatr Dummy Element
 *
 * Include: LoggerMixin
 */
export const AlwatrDummyElement = LoggerMixin(LitElement);
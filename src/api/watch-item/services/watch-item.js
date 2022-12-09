'use strict';

/**
 * watch-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::watch-item.watch-item');

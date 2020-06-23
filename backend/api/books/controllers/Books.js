'use strict';

/**
 * Books.js controller
 *
 * @description: A set of functions called "actions" for managing `Books`.
 */

module.exports = {

  /**
   * Retrieve books records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.books.search(ctx.query);
    } else {
      return strapi.services.books.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a books record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.books.fetch(ctx.params);
  },

  /**
   * Count books records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.books.count(ctx.query);
  },

  /**
   * Create a/an books record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.books.add(ctx.request.body);
  },

  /**
   * Update a/an books record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.books.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an books record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.books.remove(ctx.params);
  }
};

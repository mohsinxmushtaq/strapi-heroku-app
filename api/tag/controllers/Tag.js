'use strict';

/**
 * Tag.js controller
 *
 * @description: A set of functions called "actions" for managing `Tag`.
 */

module.exports = {

  /**
   * Retrieve tag records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.tag.fetchAll(ctx.query);
  },

  /**
   * Retrieve a tag record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tag.fetch(ctx.params);
  },

  /**
   * Create a/an tag record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tag.add(ctx.request.body);
  },

  /**
   * Update a/an tag record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tag.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tag record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tag.remove(ctx.params);
  }
};

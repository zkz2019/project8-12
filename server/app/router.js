'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
console.log('aaa');
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
};

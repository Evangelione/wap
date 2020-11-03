'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const subRouter = router.namespace('/user');
  // curl localhost:7001/sub/test
  subRouter.resources('index', '/', controller.user);

  // const subRouter = app.router.namespace('/sub/:id');
  // const subRouter = app.router.namespace('/sub', app.middleware.jsonp());
};

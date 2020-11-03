'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const subRouter = router.namespace('/v1/copartners');
  // curl localhost:7001/sub/test
  subRouter.resources('copartners', '/', controller.copartner);

  // const subRouter = app.router.namespace('/sub/:id');
  // const subRouter = app.router.namespace('/sub', app.middleware.jsonp());
};

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const subRouter = router.namespace('/v1/merchants');
  // curl localhost:7001/sub/test
  subRouter.resources('merchants', '/', controller.merchant);


  const subRouterStore = router.namespace('/v1/merchants/:mer_id/stores');
  subRouterStore.resources('stores', '/', controller.store);


  // const subRouter = app.router.namespace('/sub/:id');
  // const subRouter = app.router.namespace('/sub', app.middleware.jsonp());
};

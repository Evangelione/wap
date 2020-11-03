'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;

  const gzip = middleware.gzip({ threshold: 1024 });

  router.get('index', '/', controller.home.index);
  router.get('login', '/login', gzip, controller.home.login);
  router.post('/post', controller.home.post);

  const subRouter = router.namespace('/v1/districts');
  subRouter.resources('districts', '/', controller.district);


  const sub = app.router.namespace('/sub');
  sub.get('/post', controller.home.index);
};

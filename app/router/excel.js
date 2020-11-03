'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const subRouter = router.namespace('/excel');
  // curl localhost:7001/sub/test
  subRouter.get('/download', controller.excel.download);
  subRouter.get('/upload', controller.excel.upload);


  // const subRouter = app.router.namespace('/sub/:id');
  // const subRouter = app.router.namespace('/sub', app.middleware.jsonp());
};

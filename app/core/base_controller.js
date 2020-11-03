'use strict';

const { Controller } = require('egg');

class BaseController extends Controller {
  get user() {
    const { ctx } = this;
    return ctx.session.user;
  }

  set user(a) {
    const { ctx } = this;
    ctx.session.user = a;
  }

  get now() {
    return Math.round(new Date().valueOf() / 1000);
  }

  success(data = null, code = 0, message = 'success') {
    const { ctx } = this;
    ctx.body = {
      code,
      message,
      data,
    };
  }

  notFound(msg) {
    const { ctx } = this;
    msg = msg || 'not found';
    ctx.throw(404, msg);
  }
}

module.exports = BaseController;

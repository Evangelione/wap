'use strict';

const Controller = require('../core/base_controller');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    this.user = 'asda';

    ctx.body = '123123123';
  }

  async login() {
    const { ctx } = this;

    ctx.cookies.set('count', 'vergil');

    ctx.session.pwd = '123';

    ctx.validate({
      account: 'string',
    }, ctx.query);

    this.success('v');
  }

  async post() {
    const { ctx } = this;
    ctx.body = JSON.stringify(ctx.request.body);
  }
}

module.exports = HomeController;

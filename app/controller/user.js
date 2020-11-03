'use strict';

const Controller = require('../core/base_controller');
const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer({
  template: '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '    <meta charset="UTF-8">\n' +
    '    <title>Title</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '<!--vue-ssr-outlet-->\n' +
    '</body>\n' +
    '</html>\n',
});

class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const limit = parseInt(ctx.query.size) || null;
    const offset = ctx.query.page ? (ctx.query.page - 1) * limit : null;
    const user = await ctx.model.User.findAndCountAll({
      offset,
      limit,
    });
    this.success(user);
  }

  async new() {
    const { ctx } = this;
    const app = new Vue({
      template: '<div>Hello World12333</div>',
    });

    renderer.renderToString(app).then(html => {
      console.log(html);
      ctx.body = html;
    }).catch(err => {
      console.error(err);
    });
  }

  async show() {
    const { ctx } = this;
    const rule = {
      id: 'string',
    };
    ctx.validate(rule, ctx.params);
    const user = await ctx.model.User.findByPk(ctx.params.id);
    this.success(user);
  }

  async edit() {
    const { ctx } = this;
    ctx.body = 'edit';
  }

  async create() {
    const { ctx } = this;
    const rule = {
      name: 'string',
    };
    ctx.validate(rule, ctx.request.body);
    const user = await ctx.service.user.create(ctx.request.body.name);
    this.success(user);
  }

  async update() {
    const { ctx } = this;
    ctx.body = 'update';
  }

  async destroy() {
    const { ctx } = this;
    ctx.body = 'destroy';
  }
}

module.exports = UserController;

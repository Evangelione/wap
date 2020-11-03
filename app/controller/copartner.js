'use strict';

const Controller = require('egg').Controller;

class CopartnerController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'index';
  }

  async new() {
    const { ctx } = this;
    ctx.body = 'new';
  }

  async show() {
    const { ctx } = this;
    ctx.body = 'show';
  }

  async edit() {
    const { ctx } = this;
    ctx.body = 'edit';
  }

  async create() {
    const { ctx } = this;
    const rule = {
      account: 'string',
      password: 'string',
      name: 'string',
      phone: 'string',
    };
    ctx.validate(rule, ctx.request.body);
    const pwd = ctx.request.body.password;
    const mm = ctx.helper.md5(pwd);
    console.log({ ...ctx.request.body });
    const st = await this.ctx.model.transaction(async t => {
      await ctx.model.Copartner.create({
        ...ctx.request.body,
        password: mm,
      }, {
        transaction: t,
      });
    });
    ctx.body = st;
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

module.exports = CopartnerController;

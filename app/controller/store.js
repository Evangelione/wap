'use strict';

const Controller = require('../core/base_controller');

class StoreController extends Controller {
  async index() {
    const { ctx } = this;
    const rules = {
      mer_id: 'id',
    };
    ctx.validate(rules, ctx.params);
    const limit = parseInt(ctx.query.size) || null;
    const offset = ctx.query.page ? (ctx.query.page - 1) * limit : null;
    const stores = await ctx.model.Store.findAndCountAll({
      where: {
        mer_id: ctx.params.mer_id,
      },
      offset,
      limit,
    });
    this.success(stores);
  }

  async new() {
    const { ctx } = this;
    this.success('new');
  }

  async show() {
    const { ctx } = this;
    this.success('show');
  }

  async edit() {
    const { ctx } = this;
    this.success('edit');
  }

  async create() {
    const { ctx } = this;
    const rules = {
      mer_id: 'string',
    };
    ctx.validate(rules, ctx.request.body);
    const store = await ctx.model.Store.create(ctx.request.body);
    this.success(store);
  }

  async update() {
    const { ctx } = this;
    this.success('update');
  }

  async destroy() {
    const { ctx } = this;
    this.success('destroy');
  }
}

module.exports = StoreController;

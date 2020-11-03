'use strict';

const Controller = require('../core/base_controller');

class MerchantController extends Controller {
  async index() {
    const { ctx } = this;
    const limit = parseInt(ctx.query.size) || null;
    const offset = (ctx.query.page && limit) ? (ctx.query.page - 1) * limit : null;
    const merchants = await ctx.model.Merchant.findAndCountAll({
      attributes: { exclude: [ 'password', 'created_at', 'updated_at', 'deleted_at' ] },
      where: {
        deleted_at: null,
      },
      order: [
        [ 'created_at', 'DESC' ],
      ],
      limit,
      offset,
    });
    this.success(merchants);
  }

  async new() {
    // const { ctx } = this;
    this.success('new');
  }

  async show() {
    const { ctx } = this;
    const merchant = await ctx.model.Merchant.findOne({
      attributes: { exclude: [ 'password', 'created_at', 'updated_at', 'deleted_at' ] },
      where: {
        id: ctx.params.id,
        deleted_at: null,
      },
    });
    this.success(merchant);
  }

  async edit() {
    // const { ctx } = this;
    this.success('edit');
  }

  async create() {
    const { ctx } = this;
    const rules = {
      name: 'string',
      category_id: 'string',
      logo: 'string',
      contact: 'string',
      tel: 'string',
      account: 'string',
      password: 'string',
      province_id: 'string',
      city_id: 'string',
      area_id: 'string',
      address: 'string',
      created_at: {
        required: false,
        default: this.now,
      },
      updated_at: {
        required: false,
        default: this.now,
      },
    };
    ctx.validate(rules, ctx.request.body);
    const store = await ctx.model.Merchant.create(ctx.request.body);
    this.success(store);
  }

  async update() {
    const { ctx } = this;
    const rules = {
      name: 'string',
      updated_at: {
        required: false,
        default: this.now,
      },
    };
    ctx.validate(rules, ctx.request.body);
    const merchant = await ctx.model.Merchant.findOne({
      attributes: { exclude: [ 'password', 'created_at', 'updated_at', 'deleted_at' ] },
      where: {
        id: ctx.params.id,
        deleted_at: null,
      },
    });
    if (!merchant) {
      this.notFound();
      return;
    }
    await merchant.update(ctx.request.body);
    this.success(merchant);
  }

  async destroy() {
    const { ctx } = this;
    const rules = {
      id: 'string',
    };
    ctx.validate(rules, ctx.params);
    const merchant = await ctx.model.Merchant.findOne({
      where: {
        id: ctx.params.id,
        deleted_at: null,
      },
    });

    if (!merchant) {
      this.notFound();
      return;
    }

    await merchant.update({ updated_at: this.now, deleted_at: this.now });
    this.success();
  }
}

module.exports = MerchantController;

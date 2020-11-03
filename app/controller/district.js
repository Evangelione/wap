'use strict';

const Controller = require('../core/base_controller');

class DistrictController extends Controller {
  async index() {
    const { ctx } = this;
    const district = await ctx.model.District.findAll({
      where: {
        pid: 0,
      },
    });
    this.success(district);
  }

  async new() {
    // const { ctx } = this;
    this.success('new');
  }

  async show() {
    const { ctx } = this;
    const district = await ctx.model.District.findAll({
      where: {
        pid: ctx.params.id,
      },
    });
    this.success(district);
  }

  async edit() {
    // const { ctx } = this;
    this.success('edit');
  }

  async create() {
    // const { ctx } = this;
    this.success('create');
  }

  async update() {
    // const { ctx } = this;
    this.success('update');
  }

  async destroy() {
    // const { ctx } = this;
    this.success('destroy');
  }
}

module.exports = DistrictController;

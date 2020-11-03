'use strict';

const Controller = require('egg').Controller;

class CaptainController extends Controller {
  async index() {
    const { ctx } = this;
    const captain = await ctx.model.Captain.findOne({
      where: {
        id: '1',
      },
      include: {
        model: ctx.model.Ship,
        where: {
          id: 1,
        },
        required: false,
      },
    });
    // 现在我们需要有关他的 ship 的信息!
    // const ship = await captain.getCaptain({
    //   where: {
    //     id: 1,
    //   },
    // });
    // const ship = await captain.getShip();
    ctx.body = captain || '123';
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
      name: 'string',
      level: 'string',
    };
    ctx.validate(rule, ctx.request.body);
    const captain = await ctx.service.captain.create(ctx.request.body.name, ctx.request.body.level);
    await captain.createShip({ name: 'cc', crewCapacity: 4, amountOfSails: 4 });
    ctx.body = captain;
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

module.exports = CaptainController;

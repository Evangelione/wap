'use strict';

const { Service } = require('egg');

class CaptainService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }

  async findByPk(uid) {
    const { ctx } = this;
    const user = await ctx.model.Captain.findByPk(uid);

    if (!user) {
      return 0;
    }
    return user;
  }

  async create(name, level) {
    const { ctx } = this;
    try {
      const c = await ctx.model.Captain.create({
        name,
        skillLevel: level,
      });
      if (!c) {
        return 0;
      }
      return c;
    } catch (e) {
      ctx.onerror(e);
    }
  }
}

module.exports = CaptainService;

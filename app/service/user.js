'use strict';

const { Service } = require('egg');

class UserService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }

  async create(name) {
    const { ctx } = this;
    const s = ctx.helper.pathFor('captains');
    const s1 = ctx.helper.urlFor('captain');

    console.log(s);
    console.log(s1);
    const c = await ctx.model.User.create({
      merName: name,
      date: new Date(),
      time: new Date(),
      datetime: new Date(),
      timestamp: new Date(),
      intTime: Date.parse(new Date()) / 1000,
      str: 'fo@bar.com',
      num: ' 1234 ',
      char: ' 我说 ',
      fullName: 'cc',
      de: '1.235',
    });
    if (!c) {
      return 0;
    }
    return c;
  }
}

module.exports = UserService;

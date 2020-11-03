/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {

  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    // body最大1mb
    bodyParser: {
      jsonLimit: '1mb',
      formLimit: '1mb',
    },
    // 上传文件模式
    multipart: {
      mode: 'file',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594446760011_3703';

  // add your middleware config here
  config.middleware = [ 'errorHandler', 'notfoundHandler' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  const dbConfig = {
    sequelize: {
      dialect: 'mysql',
      // host: 'rdsh1k329zt5o7kkj9l6o.mysql.rds.aliyuncs.com',
      // port: 3306,
      // database: 'test_91gzt',
      // username: 'yk_yuemeihui',
      // password: 'ymh@yk123456',
      host: 'localhost',
      port: 3306,
      database: 'vergil',
      username: 'root',
      password: '123456',
      timezone: '+08:00',
      define: {
        // timestamps: true, // 添加create,update,delete时间戳
        // paranoid: true, // 添加软删除
        freezeTableName: true, // 防止修改表名为复数
        underscored: true, // 将驼峰式字段转为下划线
      },
      dialectOptions: { // 让读取date类型数据时返回字符串而不是UTC时间
        dateStrings: true,
        typeCast(field, next) {
          if (field.type === 'DATETIME') {
            return field.string();
          }
          return next();
        },
      },
    },
  };

  return {
    ...config,
    ...userConfig,
    ...dbConfig,
  };
};

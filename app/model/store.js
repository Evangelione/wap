'use strict';

module.exports = app => {
  const { STRING, INTEGER, DECIMAL, TINYINT, TEXT, TIME } = app.Sequelize;

  return app.model.define('store', {
    storeId: {
      type: INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
    },
    merId: {
      type: INTEGER(11),
      allowNull: false,
    },
    provinceId: {
      type: INTEGER(11),
      allowNull: false,
    },
    cityId: {
      type: INTEGER(11),
      allowNull: false,
    },
    areaId: {
      type: INTEGER(11),
      allowNull: false,
    },
    circleId: {
      type: INTEGER(11),
      allowNull: false,
    },
    marketId: {
      type: INTEGER(11),
      allowNull: false,
    },
    catId: {
      type: INTEGER(11),
      allowNull: false,
    },
    catFid: {
      type: INTEGER(11),
      allowNull: false,
    },
    name: {
      type: STRING(20),
      allowNull: false,
    },
    address: {
      type: STRING(200),
      allowNull: false,
    },
    phone: {
      type: STRING(100),
      allowNull: false,
    },
    long: {
      type: DECIMAL(10, 6),
      allowNull: false,
    },
    lat: {
      type: DECIMAL(10, 6),
      allowNull: false,
    },
    lastTime: {
      type: INTEGER(11),
      allowNull: false,
    },
    sort: {
      type: INTEGER(11),
      allowNull: false,
    },
    hits: {
      type: INTEGER(11),
      allowNull: false,
    },
    picInfo: {
      type: TEXT,
      allowNull: false,
    },
    txtInfo: {
      type: TEXT,
      allowNull: false,
    },
    status: {
      type: TINYINT(1),
      allowNull: false,
    },
    qrcodeId: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
    },
    ismain: {
      type: TINYINT(1).UNSIGNED,
      defaultValue: 0,
      allowNull: false,
    },
    weixin: {
      type: STRING(250),
      allowNull: false,
    },
    qq: {
      type: STRING(250),
      allowNull: false,
    },
    permoney: {
      type: INTEGER(10).UNSIGNED,
      defaultValue: 0,
      allowNull: false,
    },
    feature: {
      type: STRING(255),
      allowNull: false,
    },
    trafficroute: {
      type: STRING(255),
      allowNull: false,
    },
    storeType: {
      type: TINYINT(1).UNSIGNED,
      allowNull: false,
    },
    discountTxt: {
      type: STRING(200),
      allowNull: false,
    },
    open_1: {
      type: TIME,
      allowNull: false,
    },
    close_1: {
      type: TIME,
      allowNull: false,
    },
    catFid1: {
      type: INTEGER(11),
      allowNull: false,
    },
    wifiAccount: {
      type: STRING(50),
      allowNull: false,
    },
    wifiPassword: {
      type: STRING(50),
      allowNull: false,
    },
    Auth: {
      type: TINYINT(1).UNSIGNED,
      allowNull: false,
    },
    authFiles: {
      type: STRING(1000),
      allowNull: false,
    },
    authTime: {
      type: INTEGER(10).UNSIGNED,
      allowNull: false,
    },
    money: {
      type: DECIMAL(10, 2),
      defaultValue: 0.00,
      allowNull: false,
    },
    shopLogo: STRING(255),
    clockInType: STRING(255),
    haveGroup: {
      type: TINYINT(1),
      defaultValue: 1,
      allowNull: false,
    },
    haveMeal: {
      type: TINYINT(1),
      allowNull: false,
    },
    haveShop: {
      type: TINYINT(4),
      allowNull: false,
    },
    haveWaimai: {
      type: TINYINT(1),
      defaultValue: 0,
      allowNull: false,
    },
    haveHotel: {
      type: TINYINT(255),
      defaultValue: 0,
      allowNull: false,
    },
    haveService: {
      type: TINYINT(2),
      defaultValue: 0,
      allowNull: false,
    },
    haveMeet: {
      type: INTEGER(11),
      defaultValue: 0,
      allowNull: false,
    },
    havePeisong: {
      type: TINYINT(1),
    },
    haveMall: TINYINT(1),
    haveGift: {
      type: TINYINT(4),
      defaultValue: 0,
      allowNull: false,
    },
    haveAppoint: TINYINT(1),
  }, {
    tableName: 'maycms_merchant_store',
  });
};

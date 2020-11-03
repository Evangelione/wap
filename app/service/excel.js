'use strict';

const { Service } = require('egg');
const xlsx = require('node-xlsx').default;

class UserService extends Service {
  // 默认不需要提供构造函数。
  // constructor(ctx) {
  //   super(ctx); 如果需要在构造函数做一些处理，一定要有这句话，才能保证后面 `this.ctx`的使用。
  //   // 就可以直接通过 this.ctx 获取 ctx 了
  //   // 还可以直接通过 this.app 获取 app 了
  // }

  async createExcel() {

    const data = [[ 1, 2, 3 ], [ true, false, null, 'sheetjs' ], [ 'foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3' ], [ 'baz', null, 'qux' ]];
    const range = { s: { c: 0, r: 0 }, e: { c: 0, r: 3 } }; // A1:A4
    const options = { '!merges': [ range ] };

    const buffer = xlsx.build([{ name: 'mySheetName', data }], options); // Returns a buffer
    return buffer;
  }


  async readExcel() {
    console.log(__dirname);
    const workSheetsFromFile = xlsx.parse(`${__dirname}/Excel.xlsx`);
    workSheetsFromFile.forEach(sheet => {
      console.log(sheet.name);
      sheet.data.forEach((row, index) => {
        row.forEach((col, index2) => {
          console.log(`row${index} - col${index2}`);
          console.log(col + typeof col);
        });
      });
    });
    return 1;
  }
}

module.exports = UserService;

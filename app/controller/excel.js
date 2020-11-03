'use strict';

const Controller = require('egg').Controller;

class ExcelController extends Controller {
  async download() {
    const { ctx, service } = this;
    const buffer = await service.excel.createExcel();

    ctx.attachment('excel.xlsx');
    ctx.set('Content-Type', 'application/octet-stream');
    // this.ctx.type = 'xlsx';
    ctx.body = buffer;

  }


  async upload() {
    const { ctx, service } = this;
    const newVar = await service.excel.readExcel();
    ctx.body = newVar;
  }
}

module.exports = ExcelController;

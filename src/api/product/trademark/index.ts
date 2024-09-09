import request from '@/utils/request.ts';

enum API {
  TRADEMARK_URL = '/admin/product/baseTrademark/',
}

// 获取品牌数据列表
export const getTrademarkList = (page: number, limit: number) => request.get(API.TRADEMARK_URL + `${page}/${limit}`);

//对所有API进行统一管理
import requests from './request';
import mockRequests from './mockAjax';
//三级联动接口
// /api/product/getBaseCategoryList get 无参数

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })
export const reqGetBannerList = () => mockRequests({ url: '/banner', method: 'get' })
export const reqGetFloorList = () => mockRequests({ url: '/floor', method: 'get' })
    //获取搜索模块数据
export const reqSearchList = (params) =>
    requests({
        url: '/list',
        method: 'post',
        data: params
    });
export const reqDetailInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' })
    //将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })
    //获取购物车列表
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' })
    // 8.删除购物车商品
export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
    // 7.切换商品选中状态
export const reqcheckCart = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })
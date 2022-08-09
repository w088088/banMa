import axios from "axios";
var baseUrl = "/myDemo"

// 封装一个通用的请求函数
function ajax_get(url, params = {}) {
    return new Promise(resolve => {
        axios.get(url, { params }).then(res => {
            resolve(res.data)
        })
    })
}

// 封装一个通用的post请求函数
function ajax_post(url, params = {}) {
    return new Promise(function (resovle) {
        axios.post(url, params).then(res => {
            resovle(res.data)
        })
    })
}

//获取页面的动态id, 后续请求的参数 /api/v3/m1/cms/nav    get请求
let getId = () => ajax_get(baseUrl + "/api/v3/m1/cms/nav")

//首页种展示的数据     /api/v3/m1/cms/page/detail      get   pageId    	string
let getData = params => ajax_get(baseUrl + "/api/v3/m1/cms/page/detail", params)

//通过酒店id获取酒店简略信息
let getHotelData = params => ajax_post(baseUrl + "/api/v3/m1/product/list/by_ids", params)

//目的地数据
let getArea = () => ajax_get(baseUrl + "/api/v3/m1/area/group")

//二级页面数据
let getDetail = params => ajax_get(baseUrl + "/api/v3/m1/cms/page/detail", params)

//热门搜索
let getHot = () => ajax_get(baseUrl + "/api/v3/page/keywords")

//发现页数据
let getFind = params => ajax_get(baseUrl + "/api/v3/article/list", params)

//私人定制
let getIndividual = () => ajax_get(baseUrl + "/api/v3/m1/cms/customize")

//企业定制
let getTeam = () => ajax_get(baseUrl + "/api/v3/m1/enterprise_customize/page")

//单个小图的详细信息
let getQuality = params => ajax_get(baseUrl + "/api/v3/m1/product/detail", params)

//目的地页面点击城市进入二级页, tab类型
let getTab = params => ajax_get(baseUrl + "/api/v3/m1/product/list/type", params)

// 搜索结果数据
let getSearch = params => ajax_get(baseUrl + "/api/v3/m1/product/list", params)

//
let enter1 = params => ajax_post(baseUrl + "api/v3/m1/product/list/by_ids", params)
export {
    getId,
    getData,
    getHotelData,
    getArea,
    getDetail,
    getHot,
    getFind,
    getIndividual,
    getTeam,
    getQuality,
    getTab,
    getSearch,
    enter1
}


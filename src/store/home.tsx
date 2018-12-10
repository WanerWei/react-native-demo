const { observable, action, runInAction } = require('mobx')

class Home {
    @observable swiperList : Array<any>

    @action
    getHomedata() {
        fetch('https://webservice.juanpi.com/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4&app_name=zhe&app_version=&platform=&catname=newest_zhe')
        .then(response => response.json())
        .then(result => {
            // 派发 任务，存储状态（ 同步 ）
            this.swiperList = result.adsInfo.slide_ads.config.slide
        })
    }
}

export default new Home()
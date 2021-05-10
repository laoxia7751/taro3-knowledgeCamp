import { Component } from "react";
import Taro from "@tarojs/taro";
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Image,
  ScrollView
} from "@tarojs/components";
import { AtButton } from "taro-ui";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "./index.scss";

export default class Index extends Component {
  state = {
    banners: [],
    category: [],
    chooseCategory: "Android",
    hotList: []
  };
  componentWillMount() {
    this.getBanners();
    this.getCategory();
    this.getHotList();
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 获取banner
  getBanners() {
    //Taro.showLoading({ title: "加载中" });
    this.setState({
      banners: [
        {
          image: "http://gank.io/images/cfb4028bfead41e8b6e34057364969d1",
          title: "\u5e72\u8d27\u96c6\u4e2d\u8425\u65b0\u7248\u66f4\u65b0",
          url: "https://gank.io/migrate_progress"
        },
        {
          image: "http://gank.io/images/aebca647b3054757afd0e54d83e0628e",
          title:
            "- \u6625\u6c34\u521d\u751f\uff0c\u6625\u6797\u521d\u76db\uff0c\u6625\u98ce\u5341\u91cc\uff0c\u4e0d\u5982\u4f60\u3002",
          url: "https://gank.io/post/5e51497b6e7524f833c3f7a8"
        },
        {
          image: "https://pic.downk.cc/item/5e7b64fd504f4bcb040fae8f.jpg",
          title:
            "\u76d8\u70b9\u56fd\u5185\u90a3\u4e9b\u514d\u8d39\u597d\u7528\u7684\u56fe\u5e8a",
          url: "https://gank.io/post/5e7b5a8b6d2e518fdeab27aa"
        }
      ]
    });
    // Taro.request({
    //   url: "https://gank.io/api/v2/banners"
    // }).then(res => {
    //   Taro.hideLoading();
    //   this.setState({
    //     banners: res.data.data
    //   });
    // });
  }
  // 获取本周最热
  getHotList() {}
  // 获取分类列表
  getCategory() {
    this.setState({
      category: [
        {
          _id: "5e59ec146d359d60b476e621",
          coverImageUrl:
            "http://gank.io/images/b9f867a055134a8fa45ef8a321616210",
          desc: "Always deliver more than expected.\uff08Larry Page\uff09",
          title: "Android",
          type: "Android"
        },
        {
          _id: "5e59ed0e6e851660b43ec6bb",
          coverImageUrl:
            "http://gank.io/images/d435eaad954849a5b28979dd3d2674c7",
          desc:
            "Innovation distinguishes between a leader and a follower.\uff08Steve Jobs\uff09",
          title: "\u82f9\u679c",
          type: "iOS"
        },
        {
          _id: "5e5a25346e851660b43ec6bc",
          coverImageUrl:
            "http://gank.io/images/c1ce555daf954961a05a69e64892b2cc",
          desc:
            "The man who has made up his mind to win will never say \u201c Impossible\u201d\u3002\uff08 Napoleon \uff09",
          title: "Flutter",
          type: "Flutter"
        },
        {
          _id: "5e5a254b6e851660b43ec6bd",
          coverImageUrl:
            "http://gank.io/images/4415653ca3b341be8c61fcbe8cd6c950",
          desc:
            "Education is a progressive discovery of our own ignorance. \uff08 W. Durant \uff09",
          title: "\u524d\u7aef",
          type: "frontend"
        },
        {
          _id: "5e5a255c6e851660b43ec6be",
          coverImageUrl:
            "http://gank.io/images/964552b931d5470ea1506fc2b0f1cba9",
          desc:
            "If you do not learn to think when you are young, you may never learn. \uff08 Edison \uff09",
          title: "\u540e\u7aef",
          type: "backend"
        },
        {
          _id: "5e5a25716e851660b43ec6bf",
          coverImageUrl:
            "http://gank.io/images/c3c7e64f0c0647e3a6453ccf909e9780",
          desc:
            "Do not, for one repulse, forgo the purpose that you resolved to effort. \uff08 Shakespeare \uff09",
          title: "APP",
          type: "app"
        }
      ]
    });
    // Taro.request({
    //   url: "https://gank.io/api/v2/categories/Article"
    // }).then(res => {
    //   this.setState({
    //     category: res.data.data
    //   });
    // });
  }
  render() {
    return (
      <View className="index">
        {/* banner */}
        <Swiper
          className="banner"
          indicatorColor="rgba(255,255,255,.2)"
          indicatorActiveColor="#fff"
          duration="800"
          circular
          indicatorDots
          autoplay
        >
          {this.state.banners.map(item => {
            return (
              <SwiperItem key={item.url}>
                <View className="bannerItem">
                  <Image
                    class="bannerImg"
                    mode="aspectFill"
                    lazyLoad
                    src={item.image}
                    title={item.title}
                  />
                  <View className="bannerName">{item.title}</View>
                </View>
              </SwiperItem>
            );
          })}
        </Swiper>
        {/* 分类列表 */}
        <ScrollView scrollX scrollWithAnimation className="categoryList">
          {this.state.category.map(item => {
            return (
              <View
                className={`categoryItem ${this.state.chooseCategory ===
                  item.type && "active"}`}
                key={item._id}
                onClick={() => this.setState({ chooseCategory: item.type })}
              >
                {item.title}
              </View>
            );
          })}
        </ScrollView>
        {/* 分类文章 */}
        <ScrollView scrollY scrollWithAnimation onScrollToUpper={this.updateList} onScrollToLower={this.handleScrollBottom}></ScrollView>
      </View>
    );
  }
}

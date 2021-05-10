import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";

export default class Article extends Component {
  config = {
    navigationBarTitleText: "文章详情"
  };

  state = {};

  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps, nextContext) {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  componentDidCatchError() {}
  componentDidNotFound() {}
  render() {
    return <View>文章详情</View>;
  }
}

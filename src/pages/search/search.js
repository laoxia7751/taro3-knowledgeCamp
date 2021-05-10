import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";

export default class Search extends Component {
  config = {
    navigationBarTitleText: "搜索"
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
    return <View>搜索</View>;
  }
}

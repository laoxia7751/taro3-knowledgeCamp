import Taro from "@tarojs/taro";
import { Component } from "react";
import { View, Text, Button } from "@tarojs/components";

export default class Categroy extends Component {
  config = {
    navigationBarTitleText: "专题"
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
    return <View>专题</View>;
  }
}

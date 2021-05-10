import Taro from '@tarojs/taro';
import Component from 'react'
import { View, Text , Image} from '@tarojs/components';
import "./index.scss"

export default class ArticleItem extends Component.Component {

	render() {
		return (
			<View className="articleItem">
				<View className="articleImg">
					<Image src="https://ae01.alicdn.com/kf/U198c662715c14307b253dc6b989294e4K.jpg" mode="scaleToFill"/>
				</View>
				<View className="articleContent">
					<View className="title">
						<Text className="type">推荐</Text>盘点那些让人惊艳的免费壁纸网站
					</View>
					<View className="desc">盘点那些让人惊艳的免费壁纸网站,方便小伙伴们写博客或者壁纸爱好者们找到自己喜欢的壁纸呦~ 如果网站打开缓慢，可以自行FQ，快去打开壁纸新大陆吧~</View>
					<View className="attrs">
						<View className="source">
							<Image className="avatar" src="https://gank.io/images/8edfa6bca6c643b3ba3f7cec56780377" mode="scaleToFill"/>
							<Text className="author">李金山</Text>
							<Text>——</Text>
							<Text className="sourceType">李金山</Text>
						</View>
						<View className="date">1年前发布</View>
					</View>
				</View>
			</View>
		);
	}
}
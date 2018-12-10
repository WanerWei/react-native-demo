

// import Home from '../home/home'
const Home = require('../home/home')


import styles from './style.js'

const React = require('react')
const TabNavigator = require('react-native-tab-navigator')

const home = require('../../../assets/images/home.png')
const homeActive = require('../../../assets/images/homeActive.png')
const category = require('../../../assets/images/category.png')
const categoryActive = require('../../../assets/images/categoryActive.png')
const cart = require('../../../assets/images/cart.png')
const cartActive = require('../../../assets/images/cartActive.png')
const profile = require('../../../assets/images/profile.png')
const profileActive = require('../../../assets/images/profileActive.png')

// const { observable } = require('mobx')
// const { observer, inject } = require('mobx-react')


const {
    View,
    Text,
    Image
} = require('react-native')

interface Props {
    name: string
}

interface State {
    selectedTab: string
}

export default class main extends React.Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            selectedTab: 'home'
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    renderIcon={() => <Image style={styles.imgSize} source={home} />}
                    renderSelectedIcon={() => <Image style={styles.imgSize} source={homeActive} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>
                    <Home></Home>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'category'}
                    title="分类"
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    renderIcon={() => <Image style={styles.imgSize} source={category} />}
                    renderSelectedIcon={() => <Image style={styles.imgSize} source={categoryActive} />}
                    onPress={() => this.setState({ selectedTab: 'category' })}>
                    <View><Text>category</Text></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'cart'}
                    title="购物车"
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    renderIcon={() => <Image style={styles.imgSize} source={cart} />}
                    renderSelectedIcon={() => <Image style={styles.imgSize} source={cartActive} />}
                    onPress={() => this.setState({ selectedTab: 'cart' })}>
                    <View><Text>cart</Text></View>
                </TabNavigator.Item>
                <TabNavigator.Item
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTitleStyle}
                    selected={this.state.selectedTab === 'profile'}
                    title="我的"
                    renderIcon={() => <Image style={styles.imgSize} source={profile} />}
                    renderSelectedIcon={() => <Image style={styles.imgSize} source={profileActive} />}
                    onPress={() => this.setState({ selectedTab: 'profile' })}>
                    <View><Text>profile</Text></View>
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}
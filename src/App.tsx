// import React from "react"
const Main = require('./pages/main/Main')

const { Provider } = require('mobx-react')

const React = require('react')

const store = require('./store')

const { View, Text } = require('react-native')

export default class App extends React.Component {
  render() {
    return(
      <Provider>
        <Main name="name"></Main>
      </Provider>
      // <View>
      //   <Text>阿士大夫撒地方萨达</Text>
      // </View>
    )
  }
}
// import React from 'react'
const React = require('react')

// import styles from './style.js'

// import {
//     View,
//     Text
// } from 'react-native'

const { View, Text } = require('react-native')

interface Props {
    name : string
}

interface State {
    name : String
}

export default class HomeCon extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            name : 'home'
        }
    }

    render() {
        return (
            <View>
                <Text>{ this.state.name }</Text>
            </View>
        )
    }
}


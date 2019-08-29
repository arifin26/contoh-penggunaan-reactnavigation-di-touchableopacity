import React, {Component} from 'react'
import {View,Text} from 'react-native'

export default class Coba extends React.Component{
    render(){
        return(
            <View>
                <Text style={{color:'#fff'}}>
                    {this.props.gambar}
                </Text>
            </View>
        )
    }
}

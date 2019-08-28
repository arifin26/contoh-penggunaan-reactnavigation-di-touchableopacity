import React from 'react'
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


{/* <TextInput value={this.state.text} style={Styles.tek} placeholder='nama' underlineColorAndroid={'transparent'} onChangeText={inputan => this.setState({text:inputan})}/>  */}
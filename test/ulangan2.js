import React, {Component} from 'react'
import {View,Text,Image,ActivityIndicator,TextInput,TouchableOpacity} from 'react-native'
import Coba from './ulangan'


export default class Ujian extends Component{

  state={
    role:true
}

render(){
      setTimeout(()=>{
  this.setState({
      role:false
  })
} ,1000)
if (this.state.role) {
  return (
    <View style={{alignItems:'center',paddingTop:200}}>
      <Image
            source={require('../gambar/plant.png')} 
            style={{height:100,width:100}}
            
      />
      <ActivityIndicator size='large' />
      <View style={{alignItems:'center'}} >
            <Text style={{color:'#fff'}}>selamat datang</Text>
            
      </View>
    </View>
  );
  
}
return(
  <View style={{flex:1}}>
  <View style={{backgroundColor:'blue',height:50,width:'100%'}}>
    <View style={{alignItems:'center',paddingTop:10}}>
    <Coba gambar='PONDOK NEWS'  />
    <Text >{this.props.gambar}</Text>
   
    </View>
  </View>

    <View style={{paddingTop:10,paddingLeft:20,flexDirection:'row'}}>
      <Image source={require('../gambar/flower_close_up_leaves_85207_1024x768.jpg')} style={{height:60,width:60,borderRadius:40}}/>
      <View style={{flexDirection:'column',paddingTop:5}}>
      <Text style={{paddingLeft:10,fontSize:20}}>AL-Quran dan As-Sunnah</Text>
      <Text style={{paddingLeft:10,fontSize:12}}>pedoman</Text>
      </View>
    </View>



    <View style={{alignItems:'center',paddingTop:10}}>
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('Polosan')}>  
      <Image source={require('../gambar/quran.jpg')} style={{height:150,width:300}}/>
      </TouchableOpacity>
    </View>
    <View style={{paddingLeft:20,paddingRight:20}}>
        <TextInput  placeholder='developer react native' underlineColorAndroid={'black'}/>
      </View>



      <View style={{paddingTop:5,paddingLeft:20,flexDirection:'row'}}>
      <Image source={require('../gambar/Willienlg.jpg')} style={{height:60,width:60,borderRadius:40}}/>
      <View style={{flexDirection:'column',paddingTop:5}}>
      <Text style={{paddingLeft:10,fontSize:20}}>Harta Riba</Text>
      <Text style={{paddingLeft:10,fontSize:12}}>pendefisian</Text>
      </View>
    </View>




    <View style={{alignItems:'center',paddingTop:10}}>
      <Image source={require('../gambar/Emasbatangan.jpg')} style={{height:150,width:300}}/>
      
    </View>
    <View style={{paddingLeft:20,paddingRight:20}}>
        <TextInput  placeholder='developer react native' underlineColorAndroid={'black'}/>
      </View>

    

    
    

  </View>
)
}
}

import React from 'react'
import{Text,View}from 'react-native'



class Polosan extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.teks}>helluih</Text>
      </View>
    )
  }
}
 export default Polosan



 const styles = ({
   container:{
     height:50,
     width:100,
     backgroundColor:'red'
   },
   teks:{
     fontSize:26
   }

 })

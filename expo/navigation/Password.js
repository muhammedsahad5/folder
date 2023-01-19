import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Password(props) {

  return (
    <View>
    <Text style={{fontSize:20,top:5,left:5,fontWeight:"600"}}>
        Login
        </Text>
        <TouchableOpacity  onPress={() => props.navigation.navigate("Changepassword")} style={{top:30,width:250,}}>
      <View style={{  flexDirection: 'row',}}>
      <Image style={{
            width: 20,
            height: 25,
  
            

          }}

            source={require("./assets/pas.png")}>
 </Image>
          <Text style={{left:4,fontSize:20}}>
            Change Password 
          </Text>
        </View>
        </TouchableOpacity>

    </View>
  )
}
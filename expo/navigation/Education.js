import { View, Text,TextInput,Image } from 'react-native'
import React from 'react'

export default function Education() {
  return (<View>
  <View><Image style={{
               width: 60,
               height: 60,
               left:1,    
             }}
 
               source={require("./assets/e2.png")}>
 
       </Image></View>
        <View style={{
           width:400,
           left:60,
           bottom:60
           
        }}>

            <TextInput
               
                placeholder='Education Details(Required)'
                backgroundColor={"#fff"}
                activeUnderlineColor={"black"}
                style={{height:60,fontSize:20}}

            // value={text}
            // onChangeText={text => setText(text)}
            />
        </View>
    </View>
  )
}
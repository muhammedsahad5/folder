import { View, Text, TextInput,Image } from 'react-native'
import React,{useEffect} from 'react'

export default function CurrentCity() {
    return (<View>
        <View><Image style={{
               width: 60,
               height: 60,
               left:1,    
             }}
 
               source={require("./assets/c2.png")}>
 
       </Image></View>
        <View style={{
           width:400,
           left:60,
           bottom:60
           
        }}>

            <TextInput
               
                placeholder='City Details(Required)'
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
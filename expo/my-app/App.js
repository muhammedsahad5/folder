import React from 'react';
import { Text, View, Button, Image, TouchableOpacity, Alert } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

const App =()=> {



  const hai = (one,two) =>{
    Alert.alert("kk",JSON.stringify(one+two))
  }


  const person={
    name:"sahad",
    age:3,
    place:"meppadi"

  }
  const names = ["ashikh","basil","mirshan", "sahad"]


  return (
    <View>
      <View style={{ height: 150, width: 150, backgroundColor: "red", marginTop: "50%", marginLeft: "30%" }}>
        <View style={{ flexDirection: "row", justifyContent: "center", top: "40%" }}>
          <Text style={{ color: "#fff" }}>hai</Text>
          <ActivityIndicator />
        </View>
      </View >
      <View style={{ height: 150, width: 150, backgroundColor: "red", marginTop: "10%", marginLeft: "30%" }}>
        <View style={{ justifyContent: "center", top: "40%" }}>

          <Text style={{ color: "blue", alignSelf: "center" }}>hai</Text>
          <ActivityIndicator style={{ marginLeft: 50, marginTop: -20 }}></ActivityIndicator>
        </View>
      </View>
      {/* <TouchableOpacity onPress={()=>{hai(1,2)}}> */}
      {/* <TouchableOpacity onPress={()=>{
        Alert.alert("kk",JSON.stringify(person.age))
      }}> */}
      <TouchableOpacity onPress={()=>{
        Alert.alert("kk",JSON.stringify(names[1]))
      }}>

      <Image
        style={{
          width: 50,
          height: 50,
          alignSelf:"center",
          top:10
        }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        
      />
      </TouchableOpacity>
    </View>
  );
}
export default App


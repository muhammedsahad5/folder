
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Searchbar, IconButton } from 'react-native-paper';

const FirstPage = (props) => {
  const [first, setfirst] = useState("")
  const name = {
    name: "sahad ",
    place: "mepapdi",
  }

  console.log("===============================", name);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.Main}>
        <View style={{ alignContent: "center" }}>
          <Searchbar
            placeholder="Search"
            onChangeText={setfirst}
            value={first}
          />
        </View>
        <TouchableOpacity style={{width:55,height:70,}} onPress={() => props.navigation.navigate("Details")}>
   
        <IconButton style={{right:10,top:8}}iconColor="black" size={50}  icon ="account-details">
</IconButton>
        </TouchableOpacity>

      </View>
      <View style={styles.second}>
        <Text style={{ fontSize: 20 }}>
          sahad
        </Text>
        <Button 
          title="Press me"
          onPress={() => props.navigation.navigate("SecondPage", { data: name })} />
      </View>
    </View>

  )
}
export default FirstPage;
const styles=StyleSheet.create({
Main:{
      backgroundColor: "#808080",
      width: "100%",
      height: "20%"
},
second:{ width: "100%",
        height: "80%",
         alignItems: "center" },
third:{}
})





























































































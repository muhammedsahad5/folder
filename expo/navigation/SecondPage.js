import React from 'react';
import { Text, View ,Button, Alert} from 'react-native';
 
const SecondPage = (props) => {
  const{route}=props
// console.log("+++++++++++++++++++++++++++++++++",route.params );

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{color:"red",fontSize:20}}>
       {route.params.data.name}
       test
      </Text>
    
      <Button
            title="go back"
            onPress={() => props.navigation.goBack()}/>
    </View>
  );
}

export default SecondPage;
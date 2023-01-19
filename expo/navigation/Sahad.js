import { View, Text, Alert,Image,StyleSheet} from 'react-native'
import React from 'react'
import {  Avatar } from 'react-native-paper';

export default function Sahad(props) {
    const{route}=props
    console.log("+++++++++++++++++",route);
   
  return (
    <View>
      <View>
      <Text style={styles.Text}  >{route.params.DATA.name}</Text>
      </View>
      <View style={{justifyContent:"center",backgroundColor:"#D3D3D3",height:50,top:250}}>
      <Text  style={styles.sa2}>{route.params.DATA.number}</Text>
      </View>
<View>
      <Avatar.Image style={styles.image} size={130} source={{uri:route.params.DATA.image}} /></View>
<View style={{backgroundColor:"#D3D3D3",height:10,top:5}}>
</View>

     

    </View>
  )
}
const styles = StyleSheet.create({
image:{alignSelf:"center", 
bottom:50 
},
Text:{fontSize:40,
  top:150,
  alignSelf:"center",
},
sa2:{fontSize:15,
  

  



}








})





















// import React, { useState, useEffect } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   ActivityIndicator,
//   FlatList,
//   Alert,
// } from "react-native";

// // get data from this URL!
// const movieURL = "https://reactnative.dev/movies.json";

// const Counter = () => {
//   // managing state with 'useState'
//   const [isLoading, setLoading] = useState(true);
//   const [data, setData] = useState([]);
//   const [title, setTitle] = useState([]);
//   const [description, setDescription] = useState([]);

//   // similar to 'componentDidMount', gets called once
//   useEffect(() => {
//     fetch(movieURL)
//       .then((response) => response.json()) // get response, convert to json
//       .then((json) => {
//         Alert.alert("hii",JSON.stringify(json))
//         setData(json.movies);
//         setTitle(json.title);
//         setDescription(json.description);
//       })
//       .catch((error) => alert(error)) // display errors
//       .finally(() => setLoading(false)); // change loading state
//   }, []);

//   // Also get call asynchronous function
//   async function getMoviesAsync() {
//     try {
//       let response = await fetch(movieURL);
//       let json = await response.json();
//       setData(json.movies);
//       setTitle(json.title);
//       setDescription(json.description);
//       setLoading(false);
//     } catch (error) {
//       alert(error);
//     }
//   }

//   return (
//     <SafeAreaView style={styles.container}>
//       {/* While fetching show the indicator, else show response*/}
//       {isLoading ? (
//         <ActivityIndicator />
//       ) : (
//         <View>
//           {/* Title from URL */}
//           <Text style={styles.title}>{title}</Text>
//           {/* Display each movie */}
//           <View style={{ borderBottomWidth: 1, marginBottom: 12 }}></View>
//           <FlatList
//             data={data}
//             keyExtractor={({ id }, index) => id}
//             renderItem={({ item }) => (
//               <View style={{ paddingBottom: 10 }}>
//                 <Text style={styles.movieText}>
//                   {item.id}. {item.title}, {item.releaseYear}
//                 </Text>
//               </View>
//             )}
//           />
//           {/* Show the description */}
//           <Text style={styles.description}>{description}</Text>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     marginTop: 48,
//   },
//   movieText: {
//     fontSize: 26,
//     fontWeight: "200",
//   },
//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//   },
//   description: {
//     textAlign: "center",
//     marginBottom: 18,
//     fontWeight: "200",
//     color: "green",
//   },
// });

// export default Counter;
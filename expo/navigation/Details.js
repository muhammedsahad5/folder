import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, LogBox } from 'react-native';
import { Searchbar, IconButton, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage"


const Details = (props) => {
  // LogBox.ignoreAllLogs()
  const [image, setImage] = useState(null);
  const refRBSheet = useRef();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library 
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      AsyncStorage.setItem("imageContainer", JSON.stringify(result.assets[0].uri));
      refRBSheet.current.close()
    }
  };
  const takeimage = async () => {

    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.granted !== true) {
      return;
    }

    const result = await ImagePicker.launchCameraAsync();
    setImage(result.assets[0].uri);
    AsyncStorage.setItem("imageContainer", JSON.stringify(result.assets[0].uri));
    refRBSheet.current.close()

  };
  useEffect(() => {
    AsyncStorage.getItem('imageContainer', (err, result) => {
      const data = JSON.parse(result);
      setImage(data)
    })


  }, [])

  return (
    <View >
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >

        <TouchableOpacity onPress={() => { pickImage() }}>

          <View style={{ height: 45, bottom: 5 }}>
            <Image style={{ height: 40, width: 50, left: 10 }}
              source={require("./assets/gl.png")} />
            <Text style={{ fontSize: 20, left: 60, bottom: 30 }}>
              Upload photo
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { takeimage() }}>
          <View style={{ height: 45, top: 2 }}>
            <Image style={{ height: 35, width: 35, left: 18 }}
              source={require("./assets/cmr.png")} />
            <Text style={{ fontSize: 20, left: 60, bottom: 30 }}>
              Take Photo
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ height: 45, top: 8, }}>
            <Image style={{ height: 35, width: 35, left: 18, top: 2 }}
              source={require("./assets/fb.jpg")} />
            <Text style={{ fontSize: 20, left: 60, bottom: 30 }}>
              Import from Facebook
            </Text>
          </View>
        </TouchableOpacity >

        <TouchableOpacity onPress={() => {
          AsyncStorage.removeItem("imageContainer")
          setImage(null)
          refRBSheet.current.close()
        }}>
          <View style={{ height: 50, top: 10, }}>
            <Image style={{ height: 30, width: 35, left: 18, top: 5 }}
              source={require("./assets/dl.png")} />
            <Text style={{ fontSize: 20, left: 60, bottom: 22, color: "red" }}>
              Remove Current Picture
            </Text>
          </View>
        </TouchableOpacity>

      </RBSheet>


      <View>
        <TouchableOpacity onPress={() => { refRBSheet.current.open() }} style={{ width: 55, height: 70, }}>


          <View style={styles.circle}>

            {image ?

              <Image style={{
                width: 80,
                height: 80,
                borderRadius: 50,
                top: 8

              }}
                source={{
                  uri: image
                }}
              />
              :
              <Image style={{
                width: 80,
                height: 90,
              }}

                source={require("./assets/profile.png")}
              />
            }

          </View>
          <View style={styles.circle2}>
            { }

            <Image style={{
              width: 20,
              height: 20
            }}

              source={require("./assets/cam.png")}
            />

          </View >
          <View>

          </View>
        </TouchableOpacity>
        <View style={styles.TextInput}>
          <TextInput
            label="Type Name.."
            backgroundColor={"#fff"}
            activeUnderlineColor={"black"}

          // value={text}
          // onChangeText={text => setText(text)}
          />
        </View>
        <View style={styles.TextInput2}>
          <TextInput
            placeholder='Email..'
            backgroundColor={"#fff"}
            activeUnderlineColor={"black"}

          // value={text}
          // onChangeText={text => setText(text)}
          />
          <View style={styles.View}>
          </View>
          <View>
            <Text style={styles.Text}>
              Details
            </Text>
          </View>

        </View>


      </View>

      <TouchableOpacity style={{ height: 30, width: 120, alignItems: "center", right: 10 }} onPress={() => props.navigation.navigate("Flat")}>
        <View style={{ flexDirection: 'row' }}>

          <Image style={{
            width: 20,
            height: 20,

          }}

            source={require("./assets/home.png")}>

          </Image>
          <Text style={styles.Text2}>
            Home Town
          </Text>
        </View>


      </TouchableOpacity>

      <TouchableOpacity style={{ height: 30, width: 120, alignItems: "center", right: 10, top: 10 }} onPress={() => props.navigation.navigate("CurrentCity")}>
        <View style={{ flexDirection: 'row' }}>

          <Image style={{
            width: 20,
            height: 25,
            left: 2

          }}

            source={require("./assets/city.png")}>

          </Image>
          <Text style={styles.Text2}>
            Current City
          </Text>
        </View>


      </TouchableOpacity>

      <TouchableOpacity style={{ height: 30, width: 120, alignItems: "center", right: 10, top: 20 }} onPress={() => props.navigation.navigate("Education")}>
        <View style={{ flexDirection: 'row' }}>

          <Image style={{
            width: 20,
            height: 25,
            right: 5

          }}

            source={require("./assets/Education.png")}>

          </Image>
          <Text style={{ top: 5 }}>
            Education
          </Text>
        </View>


      </TouchableOpacity>


      <View style={{
        backgroundColor: "#D3D3D3", width: 400, height: 3, top: 30, shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.60,
        shadowRadius: 2,

        elevation: 12,
      }}>

      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate("Password")} style={{ top: 45, width: 180 }}>
        <View style={{ flexDirection: 'row', }}>
          <Image style={{
            width: 20,
            height: 25,
            bottom: 1


          }}

            source={require("./assets/pas.png")}>
          </Image>
          <Text style={{ top: 4, left: 4, fontSize: 15 }}>
            Password and Security
          </Text>
        </View>
      </TouchableOpacity>




    </View>


  )
}

export default Details

const styles = StyleSheet.create({
  circle: {
    left: 5,
    width: 80,
    height: 70,
    borderRadius: 80 / 2
  },

  circle2: {
    left: 60,
    bottom: 10,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    backgroundColor: "grey"
  },

  TextInput: {
    width: 280,
    left: 90,
    bottom: 50,

  },
  TextInput2: {
    top: -45,
    width: 280,
    left: 90,
    bottom: 50,

  },

  View: {
    width: 500,
    height: 4,
    backgroundColor: "#D3D3D3",
    top: 20,
    right: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.50,
    shadowRadius: 2,

    elevation: 15,

  },
  Text: {
    top: 30,
    right: 80,
    fontSize: 20,
    fontWeight: "500"


  },
  Text2: {
    // right:110,
    // bottom:15
    left: 5,
    top: 5


  },
})























































































































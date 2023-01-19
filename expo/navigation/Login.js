import { View, Text, TextInput, Button, AsyncStorage, Alert, TouchableOpacity, } from 'react-native'
import React, { useState,useEffect, } from 'react'
import Icon2 from 'react-native-vector-icons/Entypo';



export default function Login(props) {
    const [username, setusername] = useState()
    const [Password, setpassword] = useState()
    const [show, setshow] = useState(true)

    useEffect(()=>{
  setLoginDetails()
    },[])

    const setLoginDetails=async()=>{
        try{
            AsyncStorage.getItem('login_details')
        }catch{
            AsyncStorage.setItem("login_details",JSON.stringify({"username":"Admin","password":"123"}));
        }
    }

    const login = async() => {
        const value = await AsyncStorage.getItem('login_details')
        const Data= JSON.parse( value)

        if (username === Data.username && Password === Data.password) {

            props.navigation.navigate("Bot")

        } else {
            alert("username or password incorrect")
        }
    }
    return (
        <View style={{backgroundColor:"#fff",height:"100%"}} >
            <View style={{backgroundColor:"#D3D3D3",top:185,height:220,width:365,left:5,borderRadius:30}}>
                   </View>
                 
            <TextInput
                placeholder='username'
                style={{
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                    backgroundColor:"#fff"
                    
                    
                }}
                onChangeText={(text) => setusername(text)}
                value={username}
            />
            <TextInput
                placeholder='password'
                secureTextEntry={show}
                style={{
                    height: 40,      
                    margin: 12,
                    borderWidth: 1,
                    padding: 10,
                      backgroundColor:"#fff"
                
                }}
                
                onChangeText={(text) => setpassword(text)}
                value={Password} 
            >
                </TextInput>
               
               

                <TouchableOpacity style={{alignSelf:'flex-end',bottom:40,right:20}} onPress={()=>{
                    setshow(!show)
                }}>
                    
                    <Icon2 size={20} name= {!show?"eye-with-line":"eye"} 
                    />
               
                </TouchableOpacity>
                <View style={{bottom:20,}}>
            <Button  title='login' onPress={() => { login() }} />
            </View>
            

        </View>
    )
}
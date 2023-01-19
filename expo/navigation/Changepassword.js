import { View, Text, TextInput, Image, AsyncStorage, Alert } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'

export default function Changepassword(props) {

    const [current, setCurrent] = useState()
    const [newPsd, setNewPsd] = useState()
    const [retype, setretype] = useState()


    const changepassword = async () => {
         const value = await AsyncStorage.getItem('login_details')
       const Data = JSON.parse(value)
        if (current === Data.password) {
            if (newPsd.length >= 6) {
                if (newPsd === retype) {
                    try {
                        AsyncStorage.setItem("login_details", JSON.stringify({ "username": "Admin", "password": newPsd }));
                    } finally {
                        alert("successfully changed ")
                    }
                } else {
                    alert("mismatch")
                }
            }else {
                alert("min 6 crts")
            }
        } else {
            alert("current password is error")
        }
    }
    return (
        <View>
            <View style={{}}>
                <TextInput
                    secureTextEntry
                    placeholder='Current Password'
                    label="Type Name.."
                    backgroundColor={"#fff"}
                    activeUnderlineColor={"black"}
                    style={{
                        height: 40, margin: 12, borderWidth: 0.2, left: 35, fontSize: 15
                    }}

                    value={current}
                    onChangeText={text => setCurrent(text)}
                />
                <Image style={{ height: 40, width: 40, bottom: 50, left: 5 }}
                    source={require("./assets/PC.png")}>

                </Image>
            </View>

            <View style={{ bottom: 45 }}>
                <TextInput
                    secureTextEntry
                    placeholder='New Password'
                    label="Type Name.."
                    backgroundColor={"#fff"}
                    activeUnderlineColor={"black"}
                    style={{ height: 40, margin: 12, borderWidth: 0.2, left: 35, fontSize: 15 }}

                    value={newPsd}
                    onChangeText={text => setNewPsd(text)}
                />
                <Image style={{ height: 45, width: 40, bottom: 50, left: 5 }}
                    source={require("./assets/KEY.png")}>

                </Image>
            </View>

            <View style={{ bottom: 95 }}>
                <TextInput
                    secureTextEntry
                    placeholder='Re-Type Password'
                    label="Type Name.."
                    backgroundColor={"#fff"}
                    activeUnderlineColor={"black"}
                    style={{ height: 40, margin: 12, borderWidth: 0.2, left: 35, fontSize: 15 }}

                    value={retype}
                    onChangeText={text => setretype(text)}
                />
                <Image style={{ height: 45, width: 40, bottom: 50, left: 5 }}
                    source={require("./assets/KEY.png")}>

                </Image>
                <Button style={{ bottom: 30 }} onPress={() => {
                    changepassword()
                }}>
                    Update Password
                </Button>
            </View>
        </View>
    )
}
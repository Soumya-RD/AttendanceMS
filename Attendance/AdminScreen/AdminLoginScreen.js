import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AdminLoginScreen = ({ navigation }) => {
    return (
        <View style={styles.Main_View}>
            <View>
                {/* logo */}
            </View>

            {/* Teacher Id */}


            <View style={styles.Id_MainView}>
                <View>
                    <MaterialIcons name="drive-file-rename-outline" style={styles.Id_Icon} />
                </View>
                <View style={styles.ID_View}>
                    <TextInput style={styles.ID_TextInput}
                        placeholder='Enter Admin ID'
                    />
                </View>
            </View>


            {/* password  */}


            <View style={styles.Password_Main_View}>
                <View style={styles.password_leftIcon}>
                    <FontAwesome6 name="lock" size={22} color="black" />
                </View>
                <View>
                    <TextInput style={styles.Password_TextInput}
                        placeholder='Password' secureTextEntry={true} />
                </View>
                <TouchableOpacity style={styles.password_rightIcon}>
                    <MaterialCommunityIcons name="eye" size={25} color="black" />
                </TouchableOpacity>

            </View>



            {/* Login Button */}


            <View style={styles.login_View}>
                <TouchableOpacity
                    style={styles.LoginTouchableOpacity}
                    onPress={() => navigation.navigate('AdminHomeScreen')}>
                    <Text style={styles.Login_Text}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default AdminLoginScreen

const styles = StyleSheet.create({
    Main_View: {
        flex: 1,
        backgroundColor: '#caf0f8',
    },
    ID_TextInput: {

        height: 50,
        width: 200,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 20
    },

    Id_MainView: {
        flexDirection: 'row',
        height: 50,
        width: 280,
        marginTop: 150,
        borderRadius: 15,
        backgroundColor: '#d8f3dc',
        marginLeft: 40,
        borderWidth:1
    },
    Id_Icon: {
        fontSize: 24,
        paddingLeft: 10,
        marginTop: 10
    },
    Password_Main_View: {
        flexDirection: 'row',
        height: 50,
        width: 280,
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: '#d8f3dc',
        marginLeft: 40,
        borderWidth:1

    },
    password_leftIcon: {

        paddingLeft: 10,
        marginTop: 13
    },
    password_rightIcon: {

        paddingLeft: 10,
        marginTop: 13
    },
    Password_TextInput: {

        height: 50,
        width: 190,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10

    },
   
    Login_Text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 7,
        color: '#fff'

    },
    login_View: {
        height: 40,
        width: 150,
        marginLeft: 100,
        borderRadius: 10,
        backgroundColor: '#003554',
        marginTop: 25
    },
   
   
})
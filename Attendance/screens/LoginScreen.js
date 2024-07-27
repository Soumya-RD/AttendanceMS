import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.Container}>
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
                        placeholder='Enter Teacher ID'
                    />
                </View>
            </View>


            {/* password  */}


            <View style={styles.Password_Container}>
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
                    onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.Login_Text}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>




            {/* forgot password */}


            <TouchableOpacity>
                <View style={styles.Forgot_Password_View}>
                    <Text style={styles.Forgot_Password_Text}>
                        Forgot password ?
                    </Text>
                </View>
            </TouchableOpacity>


            {/* Admin Login */}
            <View style={styles.Admin_login_view}>
                <View style={styles.Admin_login_TextView}>
                    <Text style={styles.Admin_login_Text}>Login as Admin ?</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>navigation.navigate('AdminLoginScreen')}>
                        <Text style={styles.Admin_Login_Button}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    Container: {
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
    Password_Container: {
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
    LoginTouchableOpacity: {

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
    Forgot_Password_Text: {
        fontWeight: 'bold',
        marginLeft: 120,
        marginTop: 45,
        fontSize: 15

    },
    Admin_login_view: {
        flexDirection: 'row',
        marginTop: 40,
        marginLeft:100
    },
    Admin_login_TextView: {

    },
    Admin_login_Text:{
        fontWeight:'bold',
        fontSize: 15
    },
    Admin_Login_Button:{
        marginLeft:5,
        width:50,
        height:25,
        textAlign:'center',
        fontWeight:'bold',
        color:'#fff',
        backgroundColor:'#003554',
        borderRadius:5,
        paddingTop:3
    }

})
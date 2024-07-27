import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const Registation = ({ navigation }) => {
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
                        placeholder='Enter Teacher ID'
                    />
                </View>
            </View>


            {/* password */}
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


            {/* password */}
            <View style={styles.Password_Main_View}>
                <View style={styles.password_leftIcon}>
                    <MaterialIcons name="password" size={24} color="black" />
                </View>


                {/* conform password */}
                <View>
                    <TextInput placeholder='Conform Password'
                        secureTextEntry={true}
                        style={styles.Password_TextInput} />
                </View>
                <View>
                    <TouchableOpacity style={styles.Conform_password_rightIcon}>
                        <MaterialCommunityIcons name="eye" size={25} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            {/* Register button */}
            <View style={styles.register_View}>
                <TouchableOpacity
                    style={styles.registerTouchableOpacity}
                    onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={styles.register_Text}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>


            {/* create account  */}
            <View style={styles.CreateAccount_SignIn_View}>
                <View>
                    <Text style={styles.CreateAccount_Text}>
                        Login into an existing account?
                    </Text>

                </View>

                {/* Signin  */}
                <View style={styles.SignIn_View}>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={styles.SignIn_Text}>
                            SignIn
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>


        </View>

    )
}

export default Registation

const styles = StyleSheet.create({
    Main_View: {
        flex: 1,
        backgroundColor: '#1dc0bb'
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
        marginTop: 60,
        borderRadius: 15,
        backgroundColor: '#d8f3dc',
        marginLeft: 40
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
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: '#d8f3dc',
        marginLeft: 40

    },
    password_leftIcon: {

        paddingLeft: 10,
        marginTop: 13
    },
    password_rightIcon: {

        paddingLeft: 10,
        marginTop: 13
    },
    Conform_password_rightIcon: {

        paddingLeft: 6,
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
    registerTouchableOpacity: {

    },
    register_Text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        paddingTop: 7,
        color: '#fff'

    },
    register_View: {
        height: 40,
        width: 150,
        marginLeft: 100,
        borderRadius: 10,
        backgroundColor: '#003554',
        marginTop: 25
    },
    ConformPassword_View: {
        flexDirection: 'row'
    },
    SignIn_Text: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        color: '#fff'

    },
    SignIn_View: {
        marginLeft: 5,
        width: 70,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#003554'
    },
    CreateAccount_Text: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        // color:'#fff'
    },
    CreateAccount_SignIn_View: {
        marginTop: 75,
        flexDirection: 'row',
        marginLeft: 60
    },

})
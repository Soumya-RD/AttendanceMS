import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'


const AdminHomeScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#ccc9dc', flex: 1 }}>





            {/* <View style={styles.Select_Module_View}>
                <Text style={styles.Select_Module_Text}>Pick a Module</Text>
            </View> */}





            <View style={styles.First_Module_Line_View}>


                {/* Student Module */}
                <TouchableOpacity onPress={() => navigation.navigate('AdminStudentScreen')}>
                    <View style={styles.Student_Module_View}>
                        <Image
                            style={styles.Module_Image}
                            source={require('../assets/student.jpg')} />
                        <Text style={styles.Module_Text}>Student </Text>

                    </View>
                </TouchableOpacity>

                {/* Teacher Module */}
                <TouchableOpacity onPress={() => navigation.navigate('AdminTeacherScreen')}>

                    <View style={styles.Teacher_Module_View}>
                        <Image style={styles.Module_Image} source={require('../assets/teacher.jpg')} />
                        <Text style={styles.Module_Text}>Teacher </Text>

                    </View>
                </TouchableOpacity>



            </View>
            <View style={styles.Second_Module_Line_View}>



                {/* Class Room Module */}

                <TouchableOpacity onPress={() => navigation.navigate('AdminClassRoomScreen')}>
                    <View style={styles.ClassRoom_Module_View}>
                        <Image style={styles.Module_Image} source={require('../assets/classroom.jpg')} />
                        <Text style={styles.Module_Text}>Class Room </Text>

                    </View>
                </TouchableOpacity>

                {/* Subject Module */}

                <TouchableOpacity onPress={() => navigation.navigate('AdminSubjectScreen')}>
                    <View style={styles.Subject_Module_View}>
                        <Image style={styles.Module_Image} source={require('../assets/subject.jpg')} />
                        <Text style={styles.Module_Text}>Subject</Text>

                    </View>
                </TouchableOpacity>

            </View>
            <View style={styles.Thered_Module_Line_View}>
                {/* Assign Class Module */}

                <TouchableOpacity onPress={() => navigation.navigate('AdminAssignScreen')}>
                    <View style={styles.Assign_Module_View}>
                        <Image
                            style={styles.Module_Image}
                            source={require('../assets/assign.jpg')} />
                        <Text style={styles.Module_Text}>Assign </Text>

                    </View>
                </TouchableOpacity>

                {/* View Module */}

                <TouchableOpacity onPress={() => navigation.navigate('AdminViewScreen')}>
                    <View style={styles.View_Module_View}>
                        <Image
                            style={styles.Module_Image}
                            source={require('../assets/ViewModule.jpg')}
                        />
                        <Text style={styles.Module_Text}>
                            View
                        </Text>

                    </View>
                </TouchableOpacity>
            </View>


        </View>
    )
}

export default AdminHomeScreen

const styles = StyleSheet.create({

    First_Module_Line_View: {
        flexDirection: 'row',
        marginLeft: 35,
        marginTop: 90
    },
    Second_Module_Line_View: {
        flexDirection: 'row',
        marginLeft: 35,
        marginTop: 40
    },
    Thered_Module_Line_View: {
        flexDirection: 'row',
        marginLeft: 35,
        marginTop: 40
    },
    Module_Text: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    Select_Module_Text: {
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff',
        textAlign: 'center',
        paddingTop: 5
    },
    Select_Module_View: {
        backgroundColor: '#240046',
        width: 250,
        marginLeft: 50,
        borderRadius: 10,
        height: 45,
        marginTop: 35
    },
    Student_Module_View: {
        borderWidth: 1,
        width: 120,
        height: 120,
        // marginLeft:5
        justifyContent: 'center',
        backgroundColor: '#0f4c5c',
        borderRadius: 15

    },
    Teacher_Module_View: {
        borderWidth: 1,
        width: 120,
        height: 120,
        marginLeft: 40,
        justifyContent: 'center',
        backgroundColor: '#0f4c5c',
        borderRadius: 15



    },
    ClassRoom_Module_View: {
        borderWidth: 1,
        width: 120,
        height: 120,
        justifyContent: 'center',
        backgroundColor: '#0f4c5c',
        borderRadius: 15



    },
    Subject_Module_View: {
        borderWidth: 1,
        width: 120,
        height: 120,
        marginLeft: 40,
        justifyContent: 'center',
        backgroundColor: '#0f4c5c',
        borderRadius: 15



    },
    Assign_Module_View: {
        borderWidth: 1,
        width: 120,
        height: 120,
        justifyContent: 'center',
        backgroundColor: '#0f4c5c',
        borderRadius: 15



    },
    View_Module_View: {
        borderWidth: 1,
        width: 120,
        height: 120,
        marginLeft: 40,
        justifyContent: 'center',
        backgroundColor: '#0f4c5c',
        borderRadius: 15



    },
    Module_Image: {
        height: 50,
        width: 50,
        marginLeft: 35,
        borderRadius: 5
    },


})
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

const ClassScreen = ({ navigation }) => {
    const [selectedStatus, setSelectedStatus] = useState(null);

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };


    const handleNextPress = () => {
        // Show alert when Next is clicked
        Alert.alert(
            'Number of Students: ',
            'Student Nos.',
            [
                {
                    text: 'Cancel',
                    onPress: () => {
                        navigation.navigate('ClassScreen');

                    },
                    style: 'cancel'
                },
                {
                    text: 'OK',
                    onPress: () => {
                        // Proceed with your action here
                        navigation.navigate('AlertScreen');
                        // Example navigation to another screen
                    }
                }
            ],
            { cancelable: false }
        );
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.TopView}>
                <View style={styles.LeftRightBox_View}>
                    {/* Department */}


                    <View style={styles.TopBox_View}>
                        <Text style={styles.TopBox_Text}>Department</Text>
                    </View>





                    {/* Batch */}
                    <View style={styles.TopBox_View}>
                        <Text style={styles.TopBox_Text}>Batch</Text>
                    </View>




                    {/* Session */}
                    <View style={styles.TopBox_View}>
                        <Text style={styles.TopBox_Text}>Session</Text>
                    </View>




                    {/* Section */}
                    <View style={styles.TopBox_View}>
                        <Text style={styles.TopBox_Text}>Section</Text>
                    </View>




                    {/* search box */}
                    <View style={styles.SearchBox_View}>
                        <View style={styles.SearchIcon_View}>
                            <Ionicons name="search-outline" size={24} color="black" />
                        </View>
                        <View style={styles.SearchTextInput_View}>
                            <TextInput
                                style={styles.Search_TextInput}
                                placeholder='Search Student' />
                        </View>
                    </View>
                </View>

                <View style={styles.LeftRightBox_View}>
                    {/*Subject */}


                    <View style={styles.TopBox_View}>
                        <Text style={styles.TopBox_Text}>Subject</Text>
                    </View>





                    {/* Date */}
                    <View style={styles.TopBox_View}>
                        <Text style={styles.TopBox_Text}>Date</Text>
                    </View>




                    {/* Time */}
                    <View style={styles.TopBox_View}>
                        <Text style={styles.TopBox_Text}>Time</Text>
                    </View>




                    {/* Total Student*/}
                    <View style={styles.TopBox_View}>
                        <Text style={styles.TopBox_Text}>Total Student</Text>
                    </View>



                </View>

            </View>



            <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.ScrollView}>
                <View>


                    {/* student list */}
                    <View style={styles.Student_Header_View}>
                        <View>
                            {/* Roll number */}
                            <Text style={styles.Roll_Number_Text}>Roll Number</Text>
                        </View>
                        <View>
                            {/* name of student */}
                            <Text style={styles.Student_Name_Text}>Student Name</Text>
                        </View>
                        <View>
                            {/* status */}
                            <Text style={styles.Status_Text}>Status</Text>
                        </View>
                    </View>
                    <View style={styles.Student_Header_View}>



                        <View>
                            {/* Roll number */}
                            <Text style={styles.Student_Rollnumber}>001</Text>
                        </View>



                        {/* name of student */}

                        <View>
                            <Text style={styles.Student_name}>Abc</Text>
                        </View>




                        {/* status */}
                        <View>
                            <View style={styles.Status_View}>
                                <View style={[styles.Present_Status_View, selectedStatus === 'P' && styles.Present_Selected]}>
                                    <TouchableOpacity onPress={() => handleStatusChange('P')}>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 2 }}>P</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={[styles.Absent_Status_View, selectedStatus === 'A' && styles.Absent_Selected]}>
                                    <TouchableOpacity onPress={() => handleStatusChange('A')}>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 2 }}>A</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text></Text>
                    </View>

                    {/* {Array.from({ length: 200 }, (_, i) => (
                        <View key={i} style={styles.scrollItem}>
                            <Text>Item {i + 1}</Text>
                        </View>
                    ))} */}
                </View>
            </ScrollView>




            <View style={styles.Next_View}>
                {/* next button */}
                <TouchableOpacity onPress={() => navigation.navigate('AlertScreen')}
                    style={
                        {
                            width: 70,
                            marginLeft: 250,
                        }}
                >
                    <Text>
                        <TouchableOpacity onPress={handleNextPress} style={{ width: 70, marginLeft: 250, borderRadius: 55 }}>
                            <Text style={styles.Next_Text}>Next</Text>
                        </TouchableOpacity> </Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}


export default ClassScreen

const styles = StyleSheet.create({
    LeftRightBox_View: {
        width: 160,
        marginLeft: 13,

    },
    TopBox_View: {
        borderWidth: 1,
        marginTop: 5,
        height: 30,
        borderRadius: 5,
        backgroundColor: '#edf6f9'
    },
    TopBox_Text: {
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5
    },
    TopView: {
        flexDirection: 'row',
        backgroundColor: '#274c77',
        height: 185,
    },


    Total_student_View: {
        width: 144,
        height: 25,
        borderRadius: 5,
        backgroundColor: '#fff'

    }, Total_student_Text: {
        fontWeight: 'bold',
        marginLeft: 35,
        color: '#fff',
        marginTop: -3
    },
    Date_TextInput: {
        borderWidth: 1,
        marginTop: 7,
        padding: 5,
        marginLeft: 5,
        borderRadius: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#fff'
    },
    Time_TextInput: {
        borderWidth: 1,
        marginTop: 5,
        padding: 5,
        marginLeft: 5,
        borderRadius: 10,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#fff'

    },
    Student_Header_View: {
        flexDirection: 'row',
        marginTop: 10,

        // flex:1
    },
    Roll_Number_Text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 7,
        width: 80,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#f5ebe0'

    },
    Student_Name_Text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 30,
        backgroundColor: '#f5ebe0',
        width: 130,
        textAlign: 'center',
        borderRadius: 5
    },
    Status_Text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 40,
        backgroundColor: '#f5ebe0',
        width: 60,
        textAlign: 'center',
        borderRadius: 5

    },
    Present_Status_View: {
        borderWidth: 1,
        marginLeft: 40,
        height: 25,
        width: 25,
        borderRadius: 15,

    },
    Absent_Status_View: {
        borderWidth: 1,
        marginLeft: 15,
        height: 25,
        width: 25,
        borderRadius: 15
    },
    Status_View: {
        flexDirection: 'row'
    },
    Student_Rollnumber: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 7,
        width: 80,
        textAlign: 'center'
    },
    Student_name: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 30,
        width: 130,
        textAlign: 'center'
    },
    ScrollView: {
        backgroundColor: '#bde0fe',
        paddingVertical: 10,
    },
    scrollViewContent: {
        paddingVertical: 10,
    },

    Next_Text: {
        textAlign: 'center',

        fontWeight: 'bold',
        fontSize: 17,
        height: 40,
        width: 80,
        backgroundColor: '#003554',

        borderRadius: 20,
        paddingTop: 7,
        color: '#fff',
        marginLeft: 10,
        marginBottom: 2


    },
    Date_Text: {

        height: 30,
        borderRadius: 5,
        marginTop: 4,
        backgroundColor: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        width: 130,
        marginLeft: 15
    },
    Time_Text: {

        height: 30,
        borderRadius: 5,
        marginTop: 4,
        backgroundColor: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        width: 130,
        marginLeft: 15
    },
    Subject_Text: {

        height: 30,
        borderRadius: 5,
        marginTop: 6,
        backgroundColor: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        width: 130,
        marginLeft: 15
    },
    Next_View: {
        backgroundColor: '#ebecf0',
        marginTop: 10,
    },
    RightTopView: {

    },
    Present_Status_View: {
        borderWidth: 1,
        marginLeft: 40,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: 'green',
        backgroundColor: 'white',
    },
    Absent_Status_View: {
        borderWidth: 1,
        marginLeft: 15,
        height: 25,
        width: 25,
        borderRadius: 15,
        borderColor: 'red',
        backgroundColor: 'white',
    },
    Present_Selected: {
        backgroundColor: 'green',
    },
    Absent_Selected: {
        backgroundColor: 'red',
    },

    Total_student_Text: {
        height: 30,
        borderRadius: 5,
        marginTop: 5,
        backgroundColor: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        width: 130,
        marginLeft: 15
    },
    SearchBox_View: {
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 5,
        width: 250,
        backgroundColor: '#f1faee',
        marginLeft: 50,
        borderRadius: 5

    },
    Search_TextInput: {
        fontWeight: 'bold',
        textAlign: 'center',

    },
    SearchTextInput_View: {
        width: 200,

    },
    SearchIcon_View: {
        marginLeft: 5,
        marginTop: 3
    }
}


)
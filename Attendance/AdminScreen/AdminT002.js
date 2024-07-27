import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AdminT002 = () => {
    return (
        <ScrollView horizontal >
            <View style={styles.Top_View}>

                {/* Sl. No */}
                <View style={styles.SlNo_Title_View}>
                    <Text style={styles.Title_Text}>Sl.No</Text>
                </View>

              

                {/* Teacher Name */}
                <View style={styles.Title_View}>
                    <Text style={styles.Title_Text}>Teacher Name</Text>
                </View>
                {/* Time */}
                <View style={styles.Title_View}>
                    <Text style={styles.Title_Text}>Time</Text>
                </View>
                {/* Batch Name */}
                <View style={styles.Title_View}>
                    <Text style={styles.Title_Text}>Batch Name</Text>
                </View>
                {/* Class Romm Number */}
                <View style={styles.Title_View}>
                    <Text style={styles.Title_Text}>Room Number</Text>
                </View>
            </View>
            <View>

            </View>
        </ScrollView>
    )
}

export default AdminT002

const styles = StyleSheet.create({

    Top_View: {
        flexDirection: 'row'
    },
    Title_View: {
        width: 200,
        borderWidth: 1,
        
    },
    Title_Text: {
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor:'#d8e2dc',
        padding:10
    },
    SlNo_Title_View:{
        borderWidth: 1,
        width:70
    }

})
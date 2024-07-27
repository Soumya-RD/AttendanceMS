import { StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Modal } from 'react-native'
import React, { useState } from 'react'

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>

      <View style={styles.Header_view}>

        <View style={styles.TopBoxMain_View}>
          {/* Teacher ID */}
          <View style={styles.TopBox_View}>
            <Text style={styles.TopBox_Text}>Teacher ID</Text>
          </View>





          {/* Teacher Name */}
          <View style={styles.TopBox_View}>
            <Text style={styles.TopBox_Text}>Teacher Name</Text>
          </View>


          {/* Mobile Number */}
          <View style={styles.TopBox_View}>
            <Text style={styles.TopBox_Text}>Phone</Text>
          </View>



          {/* Email */}
          <View style={styles.TopBox_View}>
            <Text style={styles.TopBox_Text}>Email</Text>
          </View>




          {/* date */}
          <View style={styles.TopBox_View}>
            <Text style={styles.TopBox_Text}>Date</Text>
          </View>




        </View>


      </View>




      {/* Buttom view */}


      <View style={styles.Buttom_View}>
        <View style={styles.Line_Buttom_View}>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={() => navigation.navigate('ClassScreen')}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>




          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>




          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
        </View>




        <View style={styles.Line_Buttom_View}>
          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>




          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>




          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
        </View>




        <View style={styles.Line_Buttom_View}>
          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>




          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>




          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
        </View>




        <View style={styles.Line_Buttom_View}>
          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>




          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>




          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
        </View>




        <View style={styles.Line_Buttom_View}>
          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>




          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>




          <View style={styles.Class_View}>
            <TouchableOpacity>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
        </View>

      </View>

    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dcd6f7',
    flex: 1
  },
  Header_view: {
    flexDirection: 'row',

  },
  TopBoxMain_View: {

  },
  TopBox_View: {
    borderWidth: 1,
    width: 250,
    height:30,
    marginTop:5,
    borderRadius:5,
    marginLeft:55,
    backgroundColor:'#edf2f4'

  },
  TopBox_Text: {
    fontWeight: 'bold',
    textAlign:'center',
    paddingTop:5
  },

  Buttom_View: {
    marginLeft: 10,
    marginTop: 20
  },


  Line_Buttom_View: {
    flexDirection: 'row'
  },
  Inner_Class_View: {
    borderWidth: 1,
    height: 20,
    width: 80,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor: '#e5e5e5'

  },
  Class_View: {
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 10,
    width: 100,
    height: 85,
    borderRadius: 5,
    backgroundColor: '#dbe4ee'
  },
  Class_To_Text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },


})
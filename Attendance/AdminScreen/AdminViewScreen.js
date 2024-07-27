import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons';
import AdminT002 from './AdminT002';

const AdminViewScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      {/* Teacher And Student Search */}
      <View style={styles.Top_View}>


        {/* Enter Teacher info */}


        <View style={styles.TeacherName_View}>
          <EvilIcons name="search" size={24} color="black" style={{ paddingTop: 2 }} />
          <TextInput
            style={styles.Name_TextInput}
            placeholder='Enter Teacher Name Or ID ' />
        </View>


        {/* Enter student Info */}


        <View style={styles.StudentName_View}>
          <EvilIcons name="search" size={24} color="black" style={{ paddingTop: 2 }} />
          <TextInput
            style={styles.Name_TextInput}
            placeholder='Enter Student Name Or Roll Number' />
        </View>

        <View style={styles.Date_Time_View}>

          {/* date */}


          <View style={styles.Date_View}>
            <TextInput
              style={styles.Date_TextInput}
              placeholder='Date' />
          </View>

          {/* Time */}


          <View style={styles.Time_View}>
            <TextInput
              style={styles.Date_TextInput}
              placeholder='Time' />
          </View>
        </View>

      </View>


      {/* Middle View */}

      <View>
        <View style={styles.Today_View}>
          <Text style={styles.Today_Text}>Today Time-Table</Text>
        </View>



        {/* Today date */}
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.Middle_Date_View}>
            <Text style={styles.Middle_Date_Text}>Date</Text>
          </View>

          <View style={styles.Middle_Date_TextInput_View}>
            <TextInput
              style={styles.Middle_Date_TextInput}
              placeholder='Date' />
          </View>
        </View>
      </View>



      {/* Buttom view */}


      <View style={styles.Buttom_View}>
        <View style={styles.Line_Buttom_View}>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Line_Buttom_View}>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.Class_View}>
          <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Line_Buttom_View}>
          <View style={styles.Class_View}>
          <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Line_Buttom_View}>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.Line_Buttom_View}>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
              <Text style={styles.Class_To_Text}> CLASS</Text>
              <View style={styles.Inner_Class_View}></View>
              <Text style={styles.Class_To_Text}>TO</Text>
              <View style={styles.Inner_Class_View}></View>
            </TouchableOpacity>
          </View>
          <View style={styles.Class_View}>
            <TouchableOpacity onPress={()=>navigation.navigate(AdminT002)}>
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

export default AdminViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcd6f7',
  },
  Top_View: {
    marginLeft: 30
  },
  Date_Time_View: {
    flexDirection: 'row',

  },
  Date_View: {
    borderWidth: 1,
    width: 145,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#edf6f9'
  },
  Time_View: {
    borderWidth: 1,
    width: 145,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#edf6f9'
  },
  Date_TextInput: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  Name_TextInput: {
    textAlign: 'center',
    fontWeight: 'bold',
    width: 250
  },
  TeacherName_View: {
    borderWidth: 1,
    width: 300,

    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#edf6f9',
    flexDirection: 'row'
  },
  StudentName_View: {
    borderWidth: 1,
    width: 300,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#edf6f9',
    flexDirection: 'row'
  },
  Today_Text: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff'
  },
  Today_View: {
    borderWidth: 1,
    marginTop: 25,
    width: 200,
    marginLeft: 80,
    backgroundColor: '#003049',
    height: 30,
    borderRadius: 5
  },
  Line_Buttom_View: {
    flexDirection: 'row'
  },
  Middle_Date_Text: {
    fontWeight: 'bold',

    textAlign: 'center',
    fontSize: 18,
    paddingLeft: 10
  },
  Middle_Date_View: {

    width: 100,
    marginLeft: 53,
    marginTop: 7
  },
  Middle_Date_TextInput_View: {
    borderWidth: 1,
    width: 150,
    marginLeft: -20,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#edf6f9',
  },
  Middle_Date_TextInput: {
    textAlign: 'center',
    fontWeight: 'bold'

  },
  Inner_Class_View: {
    borderWidth: 1,
    height: 20,
    width: 80,
    marginLeft: 10,
    borderRadius: 5,
    backgroundColor:'#e5e5e5'

  },
  Class_View: {
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 10,
    width: 100,
    height: 85,
    backgroundColor: '#f5f3f4',
    borderRadius: 5,
    backgroundColor:'#daddd8'
  },
  Class_To_Text: {
    fontWeight: 'bold',
    textAlign: 'center',
    // color:'#cfdbd5'
  },
  Buttom_View: {
    marginLeft: 10,
    // backgroundColor:'#0e1428', 
    
    
  }

})
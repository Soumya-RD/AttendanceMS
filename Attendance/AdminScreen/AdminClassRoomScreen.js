import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AdminClassRoomScreen= () => {
  return (
    <View style={styles.container}>


      {/* Drag Excel file */}


      <View>
        <Text style={styles.StudentList_Text}>UPLOAD CLASS ROOM LIST</Text>
        <View style={styles.Upload_Submit_View}>
          <TouchableOpacity style={styles.UploadFileTouchableOpacity}>
            <Text style={styles.UploadfileText}>
              Upload File
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SubmitTouchableOpacity}>
            <Text style={styles.submitText}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Maindatory_View}>
          <Text style={styles.MaindatoryText}>
            * Excel file must be contained below format

          </Text>
          <TouchableOpacity style={styles.DownloadTouchableOpacity}>
            <Text style={styles.DownloadText}>
              Download
            </Text>
          </TouchableOpacity>
        </View>
      </View>


      {/* Manual Adding */}

      <View>
        <View style={styles.Adding_Manually_View}>
          <Text style={styles.Adding_Manually_Text}>Adding Class Room Manually</Text>
        </View>
        <View>

          {/* Class Room ID */}

          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}> ID</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Class Room ID' />
            </View>
          </View>



          {/* Class Room Number */}

          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Room Number</Text>

            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Class Room Number' />
            </View>
          </View>





        



          {/*  Room Capacity */}
          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}> Capacity</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Capacity' />
            </View>
          </View>



         

        </View>
      </View>
      <View style={styles.Submit_View}>
        <TouchableOpacity>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AdminClassRoomScreen

const styles = StyleSheet.create({

  container: {

    flex: 1
  },
  StudentList_Text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#003049',
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: '#fdf0d5',
    height: 55,
    paddingTop: 15,
    fontStyle: 'italic',


  },
  UploadFileTouchableOpacity: {

    width: 150,
    backgroundColor: '#003554',
    height: 30,
    borderRadius: 10,




  },
  Upload_Submit_View: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,

  },
  UploadfileText: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
    color: '#fff',


  },
  submitText: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
    color: '#fff'

  },
  SubmitTouchableOpacity: {

    width: 150,
    backgroundColor: '#003554',
    height: 30,
    marginLeft: 10,
    borderRadius: 10
  },


  MaindatoryText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#03045e'

  },
  DownloadText: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 5,
    color: '#fff'
  },
  DownloadTouchableOpacity: {
    width: 100,
    backgroundColor: '#003554',
    height: 30,
    marginLeft: 240,
    borderRadius: 10,
    marginTop:5
  },
  Maindatory_View: {
    marginTop: 30,
    marginLeft: 10,
   
  },
  Manual_Text: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    color: '#f8f9fa'
  },
  Manual_View: {

    marginTop: 5,
    width: 100,
    marginLeft: 10,
    backgroundColor: '#293241'


  },
  ManualMain_View: {
    flexDirection: 'row'
  },
  TextInput_View: {
    borderWidth: 1,
    width: 220,
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: '#e5e5e5',
    borderRadius: 5

  },
  Manual_TextInput: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  Adding_Manually_Text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#fff'

  },
  Adding_Manually_View: {
   
    backgroundColor: '#190028',
    marginTop: 30,
    width: 250,
    height: 25,
    marginLeft: 50,
    borderRadius: 5,
    marginBottom:15
  },
  Submit_View:{
   
    width:100,
    height:35,
    marginTop:35,
    marginLeft:130,
    backgroundColor: '#003554',
    borderRadius:10,
    paddingTop:3
  },
 
})
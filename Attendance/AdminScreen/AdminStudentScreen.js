import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const AdminStudentScreen = () => {
  return (
    <View style={styles.container}>


      {/* Drag Excel file */}


      <View>
        <Text style={styles.StudentList_Text}>UPLOAD STUDENT LIST</Text>
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
          <Text style={styles.Adding_Manually_Text}>Adding Student Manually</Text>
        </View>
        <View>

          {/* Roll Number */}

          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Roll Number</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Student Roll Number' />
            </View>
          </View>



          {/* Student Name */}
          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Name</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Student Name' />
            </View>
          </View>


          {/* Student Mobile Number */}

          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Mobile</Text>

            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Mobile Number' />
            </View>
          </View>



          {/* Guardian name */}
          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Guardian Name</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Guardian Name' />
            </View>

          </View>


          {/* Guardian Monile Number */}

          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Guardian Mobile</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Guardian Mobile Number' />
            </View>
          </View>



          {/* Student Email */}
          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}> Email</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Email' />
            </View>
          </View>



          {/* Student Address */}
          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Address</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Address' />
            </View>
          </View>



          {/* Student Blood Group */}
          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Blood Group</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Blood Group' />
            </View>
          </View>



          {/* Student DOB */}
          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>DOB</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='DOB' />
            </View>
          </View>


          {/* Student Catagory */}

          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Catagory</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Catagory' />
            </View>
          </View>


          {/* Student Batch */}

          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Batch</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Batch' />
            </View>
          </View>


          {/* Batch Name */}
          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Batch Name</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Batch Name' />
            </View>
          </View>

          {/* Admission Date */}

          <View style={styles.ManualMain_View}>
            <View style={styles.Manual_View}>
              <Text style={styles.Manual_Text}>Admission Date</Text>
            </View>
            <View style={styles.TextInput_View}>
              <TextInput
                style={styles.Manual_TextInput}
                placeholder='Admission Date' />
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

export default AdminStudentScreen

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
    borderRadius: 10
  },
  Maindatory_View: {
    marginTop: 20,
    marginLeft: 10
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
    // marginLeft:10,
    backgroundColor: '#190028',
    marginTop: 10,
    width: 250,
    height: 25,
    marginLeft: 50,
    borderRadius: 5
  },
  Submit_View:{
   
    width:100,
    height:35,
    marginTop:5,
    marginLeft:130,
    backgroundColor: '#003554',
    borderRadius:10,
    paddingTop:3
  },
 
})
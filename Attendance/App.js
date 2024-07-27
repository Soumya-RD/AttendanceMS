import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Registation from './screens/Registation';
import ClassScreen from './screens/ClassScreen';
import AlertScreen from './screens/AlertScreen';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import AdminLoginScreen from './AdminScreen/AdminLoginScreen';
import AdminAssignScreen from './AdminScreen/AdminAssignScreen';
import AdminClassRoomScreen from './AdminScreen/AdminClassRoomScreen';
import AdminStudentScreen from './AdminScreen/AdminStudentScreen';
import AdminSubjectScreen from './AdminScreen/AdminSubjectScreen';
import AdminTeacherScreen from './AdminScreen/AdminTeacherScreen';
import AdminViewScreen from './AdminScreen/AdminViewScreen';
import AdminHomeScreen from './AdminScreen/AdminHomeScreen';
import AdminT002 from './AdminScreen/AdminT002';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={styles.navigatorContainer}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">


          {/* homeScreen */}
          <Stack.Screen name="HomeScreen" component={HomeScreen}
            options={{
              title: 'Classroom Dashboard',
              headerStyle: {
                backgroundColor: '#260f26',


              },
              headerTitleStyle: {
                fontSize: 25,
                color: '#bdc8dc',
                fontWeight: 'bold'

              },
              headerTintColor: '#edead0',
              headerTitleAlign: 'center',


            }}
          />



          {/* loginScreen or LoginScreen */}


          <Stack.Screen name="LoginScreen" component={LoginScreen}
            options={{
              title: 'Faculty Entry',
              headerStyle: {
                backgroundColor: '#caf0f8',


              },
              headerTitleStyle: {
                fontSize: 25,
                color: '#003554',
                fontWeight: 'bold'

              },

              headerTitleAlign: 'center',


            }} />
          <Stack.Screen name='Registation' component={Registation} />



          {/* ClassScreen    or Attendance hub */}


          <Stack.Screen name='ClassScreen' component={ClassScreen}
            options={{
              title: 'Attendance Hub',
              headerStyle: {
                backgroundColor: '#274c77',


              },
              headerTitleStyle: {
                fontSize: 25,
                color: '#bdc8dc',
                fontWeight: 'bold'

              },
              headerTitleAlign: 'center',


            }}
          />
          <Stack.Screen name='AlertScreen' component={AlertScreen} />


          {/* Admin login screen or admin login only */}

          <Stack.Screen name='AdminLoginScreen' component={AdminLoginScreen}

            options={{
              title: 'Admin Login Only',
              headerStyle: {
                backgroundColor: '#caf0f8',
              },
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#003554',
                headerTitleAlign: 'center'
              },

            }}

          />



          {/* Assign class or Admin Assign Screen */}
          <Stack.Screen name='AdminAssignScreen' component={AdminAssignScreen}
            options={{
              title: 'Assign Classes',
              headerStyle: {
                backgroundColor: '#0f4c5c',
              },
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#f5ebe0',
                headerTitleAlign: 'center'
              },

            }}
          />



          {/* Adding Class Room  admin Class room Screen*/}
          <Stack.Screen name='AdminClassRoomScreen' component={AdminClassRoomScreen}
            options={{
              title: 'Adding Class Room',
              headerStyle: {
                backgroundColor: '#0f4c5c',
              },
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#f5ebe0',
                headerTitleAlign: 'center'
              },

            }}
          />



          {/* admin student screen /
          Adding student
          */}

          <Stack.Screen name='AdminStudentScreen' component={AdminStudentScreen}

            options={{
              title: 'Adding Student',
              headerStyle: {
                backgroundColor: '#0f4c5c',
              },
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#f5ebe0',
                headerTitleAlign: 'center'
              },

            }}
          />


          {/* Adding Subject */}
          <Stack.Screen name='AdminSubjectScreen' component={AdminSubjectScreen}

            options={{
              title: 'Adding Subject',
              headerStyle: {
                backgroundColor: '#0f4c5c',
              },
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#f5ebe0',
                headerTitleAlign: 'center'
              },

            }}
          />




          <Stack.Screen name='AdminViewScreen' component={AdminViewScreen} />



          {/* Adding Teacher or Admin Teacher Screen */}
          <Stack.Screen name='AdminTeacherScreen' component={AdminTeacherScreen}
            options={{
              title: 'Adding Teacher',
              headerStyle: {
                backgroundColor: '#0f4c5c',
              },
              headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
                color: '#f5ebe0',
                headerTitleAlign: 'center'
              },

            }}
          />



          {/* Pick a module*/}


          <Stack.Screen name='AdminHomeScreen' component={AdminHomeScreen}
            options={{
              title: 'Pick a Module',
              headerStyle: {
                backgroundColor: '#0f4c5c',


              },
              headerTitleStyle: {
                fontSize: 25,
                color: '#f5ebe0',
                fontWeight: 'bold'

              },

              headerTitleAlign: 'center',


            }}
          />
          <Stack.Screen name='AdminT002' component={AdminT002} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App
const styles = StyleSheet.create({
  navigatorContainer: {
    marginTop: 40,
    flex: 1,
  },
});


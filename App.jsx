import * as React from 'react';
import { View } from 'react-native';
import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './src/About';
import Contact from './src/Contact';
import UserData from './src/UserData';
import Course from './src/Course';

const App = () => {
  const Stack = createNativeStackNavigator();
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name="Course" component={Course}
        options={{
          headerTitleStyle: {
            fontSize: 30,
          },
          headerTitle: "Courses",
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="Student" component={UserData}
        options={{
          headerTitleStyle: {
            fontSize: 30,
          },
          headerTitle: "Student",
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="About" component={About}
        options={{
          headerTitleStyle: {
            fontSize: 30,
          },
          headerTitle: "About Us",
          headerTitleAlign: 'center'
        }}
      />
      <Stack.Screen name="Contact" component={Contact}
        options={{
          headerTitleStyle: {
            fontSize: 30,
          },
          headerTitle: "Contact Us",
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
}
export default App
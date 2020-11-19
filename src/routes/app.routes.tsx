import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../pages/Main';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#f0f0f0' },
    }}
  >
    <App.Screen name="Main" component={Main} />
    {/* <App.Screen name="Profile" component={Profile} />
    <App.Screen
      name="AppointmentDatePicker"
      component={AppointmentDatePicker}
    />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} /> */}
  </App.Navigator>
);

export default AppRoutes;

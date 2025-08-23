import React from 'react';
import { ScrollView } from 'react-native';
import Header from './components/Header/Header';
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './navigation/MainNavigation'

const App = () => {
  console.log(Header); // ✅ debugging outside JSX
  
    return ( 
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
  

};

export default App;

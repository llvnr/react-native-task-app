/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/redux/store';

import TasksScreens from './src/screens/Tasks';

const App = ({children, title}) => {
  return (
    <Provider store={store}> 
      <SafeAreaView style={{flex: 1}}>
        <TasksScreens />
      </SafeAreaView>
    </Provider>
  )
};

// const styles = StyleSheet.create({
  
// });

export default App;

import React, {Component} from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {Provider} from 'react-redux';
import UserList from './src/components/listComponent/UsersList';
import Wrapper from './src/components/InputComponent/Wrapper';
import store from './src/redux/store/index';

 class App extends Component{  
  render() {
    return (
       <Provider store={store}>
          <Wrapper />
          <UserList />
       </Provider>
    );
  }
}



export default App


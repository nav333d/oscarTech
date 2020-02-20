import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import InputField from '../InputComponent/InputField';
import {searchUser, saveInput} from '../../redux/actions/'
import {APIs} from '../../../constants/api';

const apiCall = new APIs();


class Wrapper extends Component{

  state={
    userName : '',
    timePassed: false
  }
    
  textChanged (name){
    
    this.props.saveInput(name)
    console.log(this.props.userName)

    setTimeout( async() => {
      const user = await apiCall.getSingleUser(this.props.userName)
    console.log(user)

    this.props.searchUser(user)
    
    }, 1000)
    

  }

    render(){
        return (
            <InputField
          
            onChangeText = {this.textChanged.bind(this)} 
            value= {this.props.userName}
            />
        )
    }
}




const mapStateToProps = (state) =>{
    return {
      userName : state.searchUser.userName
    }
  }
  
  const mapDispatchToProps = (dispatch) =>{
    return {
        searchUser : user => dispatch(searchUser(user)),
        saveInput : name => dispatch(saveInput(name))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
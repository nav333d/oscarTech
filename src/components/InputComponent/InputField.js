import React,{Component} from 'react';
import {View, Text, StyleSheet, TextInput, Dimensions , ActivityIndicator} from 'react-native';




const {height,width} = Dimensions.get('window');

class InputField extends Component{
  
    render(){

        const {value, onChangeText} = this.props
     
        return(
            <View style={{}}>
                <View style={{flexDirection: 'column', marginHorizontal :width * 0.07, marginBottom : 12 }}>
                    
                       <TextInput
                        value={value}                       
                        onChangeText={onChangeText} 
                       style={{borderBottomWidth : 1, borderBottomColor : 'grey', lineHeight : 25, paddingBottom : -5,color : 'black', fontSize : 18}}
                    />
                   
                </View>
                
               
            </View>
        )
    }
}




export default InputField

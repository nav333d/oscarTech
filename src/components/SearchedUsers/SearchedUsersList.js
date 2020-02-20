import React,{Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SearchedUsersList extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>SearchedUsersList</Text>
            </View>
        )
    }
}

export default SearchedUsersList

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
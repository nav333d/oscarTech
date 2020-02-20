import React,{Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Dimensions,Image, Button} from 'react-native';
import Modal from "react-native-modal";

const {height, width} = Dimensions.get('window')
class UserModal extends Component{
    render(){
        const {isVisible, onBackdropPress, login, avatar_url, followers, following, onPress} = this.props
        return (
           <Modal
            isVisible = {isVisible}
            style ={{ flex : 1,backgroundColor : 'white', marginTop  : height * 0.5}}
            onBackdropPress = {onBackdropPress}
            
            >
            <SafeAreaView style = {{ flex : 1, flexDirection : 'column'  }}>
                  <View style ={{ flexDirection : 'row', margin : 8}}>
                     <View>
                          <Image 
                            style ={{width : width * 0.1856, height : height * 0.09, borderRadius : 70}}
                             source={{uri : avatar_url}} 
                        />
                        </View>

                        <View style={{ flex : 1, paddingLeft : 5, paddingTop : 10, flexDirection : 'column'}}>
                            <Text style={{color : 'black', fontSize : 18, fontWeight : '400'}}> {login} </Text>
                              
                        </View>  

                        <View style ={{ maringLeft : 40}}>
                            <Button
                                onPress={() => onPress()} 
                                title = "close"
                            />
                        </View>
                </View>

                <View style={{ margin : 8}}>
                    <Text style={{color : 'black', fontWeight : '400', fontSize : 18}}> Followers  {followers} </Text>
                </View>
                <View style={{ margin : 8}}>
                    <Text style={{color : 'black', fontWeight : '400', fontSize : 18}}> Followings  {following} </Text>
                </View>

                

            
{/* 
                <View style={{flex  : 1, flexDirection : 'column'}}>
                    <View style ={{margin : 8, flexDirection : ' row'}}>
                        <Text style={{color : 'black', fontWeight : 18}}> Followers </Text>
                        <Text> {followers} </Text>
                    </View>
                    <View style ={{margin : 8, flexDirection : ' row'}}>
                        <Text style={{color : 'black', fontWeight : 18}}> Followings </Text>
                        <Text> {followings} </Text>
                    </View>
                </View> */}
         
            </SafeAreaView>

            </Modal>
        )
    }
}

export default UserModal

const styles = StyleSheet.create({
    container:{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
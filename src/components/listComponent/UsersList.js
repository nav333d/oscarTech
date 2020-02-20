import React,{Component} from 'react';
import {ScrollView, Text, StyleSheet, FlatList, Dimensions, View, Image, TouchableOpacity} from 'react-native';
import {APIs} from '../../../constants/api';
import UserModal from '../ModalComponent/UserModal';


const apiCall = new APIs()

const {height , width} = Dimensions.get('window');


class UsersList extends Component{

    state ={
        users : [],
        singleUser : [],
        modalVisible : false,
        isVisible : false
    }

  async componentDidMount(){
    
    const res = await apiCall.getAllUsers()
    this.setState({
        users : res
    })
    
  }
  onPress = () =>{
      this.setState({
          isVisible : false
      })
  }

    showModal = async (login) =>{
    
        console.log("hit")
      const res = await apiCall.getSingleUser(login)
      this.setState({
          singleUser : res,
        modalVisible : true,
        isVisible : true
    })
      console.log(res)
  }
  onBackDropPress(){
      this.setState({
          isVisible : false
      })
  }
    render(){
        const {modalVisible} = this.state;
        
        return (
            <ScrollView style={{flex : 1 }}>
                <FlatList
                data={this.state.users}
                renderItem={({item, i}) =>
                  <TouchableOpacity
                  onPress ={() => this.showModal(item.login)}
                   style={ styles.mainContainer}>
                        <View>
                          <Image 
                            style ={{width : width * 0.1856, height : height * 0.09, borderRadius : 70}}
                             source={{uri : item.avatar_url}} 
                        />
                        </View>
                        <View style={{ flex : 1, paddingLeft : 5, paddingTop : 10, flexDirection : 'column'}}>
                            <Text style={{color : 'black', fontSize : 18, fontWeight : '400'}}> {item.login} </Text>
                             <Text style={{color : 'blue',}}> {item.url} </Text>   
                        </View>                    
                </TouchableOpacity>
                 }
                keyExtractor={item => item.node_id}
                />

               {
                 modalVisible ?
                 <UserModal
                 onPress = {this.onPress}
                 login = {this.state.singleUser.login}
                 avatar_url = {this.state.singleUser.avatar_url}
                 followers = {this.state.singleUser.followers}
                 following = {this.state.singleUser.following}
                 isVisible = { this.state.isVisible}
                 onBackDropPress = {() => this.onBackDropPress()}
                  /> 
                 : null   
               }
              
            </ScrollView>
        )
    }
}

export default UsersList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
       
    },
    mainContainer:{
        flex : 1,
        padding : 8,
        borderBottomColor : 'grey',
        elevation : 0.8,
        marginBottom : 5,
        flexDirection : 'row'
       
    },
})


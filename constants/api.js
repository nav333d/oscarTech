import Axios from 'axios';
Axios.defaults.baseURL = 'https://api.github.com/users';
//https://api.github.com/users

class APIs{
    async getSingleUser(login){
        try{
            const {data} = await Axios.get(`${login}`)
            return data
        }
        catch(e){
            console.log(e)
        }
    }

    async getAllUsers(){
      try{
        const {data} = await Axios.get()
      
        return data 
      }
      catch(e){
        console.log(e)
      }
    }
}

export { APIs }
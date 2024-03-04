import { createSlice } from "@reduxjs/toolkit";

const initialState = {
     //data yang mau disimpan
     token: '',
     user:{
          id:'',
          email:'',
          firstname:'',
          lastname:''
     }
}
const getUserAuthState = () => {
     const userToken = localStorage.getItem('token')
     const userString = localStorage.getItem('user')

     if (userToken) {
          return{ 
               token : userToken,
               user : JSON.parse(userString)
           }
     }
     return { ...initialState}
}
const authSlice = createSlice({
     name: 'auth',
     initialState: getUserAuthState(),
     reducers:{
          setToken (state, action) {
               const token = action.payload
               state.token = token
               localStorage.setItem('token' , token)
          },
          setUser (state, action) {
               const { id, email, firstname, lastname } =action.payload
               state.user.id = id
               state.user.email = email
               state.user.firstname= firstname
               state.user.lastname = lastname
               localStorage.setItem ('user', JSON.stringify({id, email, firstname, lastname}))

          },
          resetAuthData () {
               localStorage.removeItem('token')
               localStorage.removeItem('user')
               //kembali ke keadaan awal (initialstate)
               return {...initialState}
          }
     }
})

export const { setToken, setUser, resetAuthData } = authSlice.actions
export default authSlice.reducer
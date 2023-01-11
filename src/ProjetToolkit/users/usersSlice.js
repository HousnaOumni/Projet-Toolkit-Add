import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = [
    {id:1,nom:'OUMNI',prenom:'Housna',email:'oumni@gmail.com'},
    {id:2,nom:'DALI',prenom:'Ahmed',email:'dali@gmail.com'},
]

const usersSlice = createSlice({
    name : 'users',
    initialState,
    reducers:{ 
        addUser:{
            reducer(state,action) {
                state.push(action.payload)
            },
            prepare(nom,prenom,email){
                return{
                    payload:{
                        id:nanoid(),
                        nom,
                        prenom,
                        email
                    }
                }
            }
        }
    }
})

export const selectAllUsers = (state) => state.users;
export const {addUser} = usersSlice.actions;
export default usersSlice.reducer;
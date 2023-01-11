import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState = [
    {id:1,title:'title1',content:'content1',userId:2},
    {id:2,title:'title2',content:'content2'},
]

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers:{ 
        addPost:{
            reducer(state,action) {
                state.push(action.payload)
            },
            prepare(title,content,userId){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        userId
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;
export const {addPost} = postsSlice.actions;
export default postsSlice.reducer;
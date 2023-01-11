import {useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';

import {addPost} from './postsSlice';
import { selectAllUsers } from '../users/usersSlice';

const AddUserForm = () => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [userId,setUserId] = useState();

    const users = useSelector(selectAllUsers);

    const handleChangeTitle = (e) => setTitle(e.target.value)
    const handleChangeContent = (e) => setContent(e.target.value)
    const handleChangeUserId = (e) => setUserId(e.target.value)


    const dispatch = useDispatch();
    const onAddPostClicked = () => {
        if(title && content ){
            dispatch(
            addPost(title,content,userId)
          )
            setTitle('');
            setContent('');
        }
    }

    const canAdd = Boolean(title) && Boolean(content) && Boolean(userId)
    //remplir select avec identifiant user 
    const usersOptions = users.map(user => (
      <option key={user.id} value={user.id}>{user.nom} {user.prenom}</option>
    ))
    return(
       <div>
         <h2>Ajout un nouveau utilisateur</h2>
         <form>
           <label htmlFor='title'>Title:</label>
           <input type="text" id="title" name="title" value={title} onChange={handleChangeTitle}/>
           <label htmlFor='content'>Content:</label>
           <input type="text" id="content" name="content" value={content} onChange={handleChangeContent}/>
           <label htmlFor='userId'>UserId:</label>
           <select id="userId" value={userId} onChange={handleChangeUserId}>
             <option value=""></option>
             {usersOptions}
           </select>
           <button type="button" onClick={onAddPostClicked} disabled={!canAdd}>Add User</button>
         </form>
       </div>

    )
}

export default AddUserForm;
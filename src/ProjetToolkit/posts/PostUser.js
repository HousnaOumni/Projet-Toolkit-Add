import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostUser = ({userId}) => {
    const users = useSelector(selectAllUsers)
    const user = users.find(user => user.id === parseInt(userId));
    console.log(user)
    return <span> {user ? user.nom :'inconnu'}</span>
}

export default PostUser;
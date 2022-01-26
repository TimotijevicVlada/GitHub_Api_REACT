import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from "../../state/actions/UserActions";

const User = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, []) 

    return (
        <div className='user'>
            <img src={user.avatar_url} alt={user.name} />
            <h2 className='name'>{user.name}</h2>
            <div className='username'>{user.login}</div>
            <div className='bio'>{user.bio}</div>
            <div className='follow'>
                <i className="fas fa-user-friends"></i>
                <span>{user.followers} Followers - {user.following} Following</span>
            </div>
            <div className='location'>
                <i className="fas fa-map-marker-alt"></i>
                <span>{user.location}</span>
            </div>
        </div>
    )
};

export default User;

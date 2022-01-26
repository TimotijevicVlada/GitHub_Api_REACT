import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from "../../state/actions/UserActions";

const User = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    useEffect(() => {
        dispatch(fetchUser());
    }, [])

    return (
        <div className='user'>
            {user.isLoading ? <h2 className='user_loading'>Loading profile...</h2> :
                <div className='user_wrapper'>
                    <img src={user.user.avatar_url} alt={user.name} />
                    <h2 className='name'>{user.user.name}</h2>
                    <div className='username'>{user.user.login}</div>
                    <div className='bio'>{user.user.bio}</div>
                    <div className='follow'>
                        <i className="fas fa-user-friends"></i>
                        <span>{user.user.followers} Followers - {user.user.following} Following</span>
                    </div>
                    <div className='location'>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{user.user.location}</span>
                    </div>
                </div>
            }
        </div>
    )
};

export default User;

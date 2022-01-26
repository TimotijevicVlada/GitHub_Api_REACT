import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from "../../state/actions/UserActions";

const User = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const  userInfo  = user.user;

    useEffect(() => {
        dispatch(fetchUser());
    }, [])

    return (
        <div className='user'>
            {user.isLoading ? <h2 className='user_loading'>Loading profile...</h2> :
                <div className='user_wrapper'>
                    <img src={userInfo.avatar_url} alt={userInfo.name} />
                    <h2 className='name'>{userInfo.name}</h2>
                    <div className='username'>{userInfo.login}</div>
                    <div className='bio'>{userInfo.bio}</div>
                    <div className='follow'>
                        <i className="fas fa-user-friends"></i>
                        <span>{userInfo.followers} Followers - {userInfo.following} Following</span>
                    </div>
                    <div className='location'>
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{userInfo.location}</span>
                    </div>
                </div>
            }
        </div>
    )
};

export default User;

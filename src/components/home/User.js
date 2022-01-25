import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/Context';
import axios from 'axios';

const User = () => {

    const { dispatch, user } = useContext(UserContext);


    const getUser = async () => {
        dispatch({ type: "FETCH_USER" });

        const headers = {
            "Authorization": `token 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`
        }
        try {
            const response = await axios.get("https://api.github.com/user", {
                "headers": headers
            });
            console.log(response.data);

            dispatch({ type: "FETCH_USER_SUCCESS", payload: response.data });
        } catch (err) {
            console.log(err);
            dispatch({ type: "FETCH_USER_FAILURE" });
        }
    };

    useEffect(() => {
        getUser();
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

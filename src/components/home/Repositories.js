import { useEffect, useContext } from 'react';
import { UserContext } from '../../context/Context';
import axios from 'axios';

const Repositories = () => {

    const { dispatch, userRepos } = useContext(UserContext);

    const getRepos = async () => {
        dispatch({ type: "FETCH_REPOS" });

        try {
            const response = await axios.get("https://api.github.com/users/TimotijevicVlada/repos");
            console.log(response.data);

            dispatch({ type: "FETCH_REPOS_SUCCESS", payload: response.data });
        } catch (err) {
            console.log(err);
            dispatch({ type: "FETCH_REPOS_FAILURE" });
        }
    };

    useEffect(() => {
        getRepos();
    }, [])

    return (
        <div className='repos'>
            {userRepos.map((item, index) => (
                <div className='repo' key={item.id}>
                    <div className='index'>#{index + 1}</div>
                    <div>
                        <h3>{item.name}</h3>
                        <div>{item.language}</div>
                    </div>

                </div>
            ))}
        </div>
    )
};

export default Repositories;

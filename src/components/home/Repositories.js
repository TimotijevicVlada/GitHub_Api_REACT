import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from '../../state/actions/ReposActions';

const Repositories = () => {

    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos);

    useEffect(() => {
        dispatch(fetchRepos());
    }, [])

    return (
        <div className='repos'>
            {repos.repos.map((item, index) => (
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

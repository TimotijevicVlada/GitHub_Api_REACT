import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from '../../state/actions/ReposActions';

const Repositories = () => {

    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos);
    const reposInfo = repos.repos.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1);

    useEffect(() => {
        dispatch(fetchRepos());
    }, [])

    return (
        <div className='repos'>
            {reposInfo.length > 0 && <h2 className='repos_title'>Repositories <span className='repos_num'>{reposInfo.length}</span></h2>}
            {repos.isLoading ? <h2 className='repos_loading'>Loading repos...</h2> :
                reposInfo.map((item, index) => (
                    <a href={item.html_url} target="_blank" rel="noreferrer" className='repos_item' key={item.id}>
                        <div className='repos_index'>#{index + 1}</div>
                        <div className='repo_info'>
                            <div className='repo_info_main'>
                                <div className='repo_name'>
                                    <span>{item.name}</span>
                                    <span>{item.visibility}</span>
                                </div>
                                <div className='repo_lang'>
                                    <span>{item.language}</span>
                                    <span>Updated <span className='updated'>{new Date(item.updated_at).toDateString()}</span></span>
                                </div>
                            </div>
                            <div className='owner'>
                                <img src={item.owner.avatar_url} alt={item.owner.name} />
                            </div>
                        </div>
                    </a>
                ))}
        </div>
    )
};

export default Repositories;

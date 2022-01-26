import React from 'react';
import { useSelector } from 'react-redux';

const SearchProfileRepos = () => {

    const repos = useSelector(state => state.searchRepos);
    const reposInfo = repos.repos;
    console.log(reposInfo);

    return (
        <div className='profile_repos'>
            {reposInfo.length > 0 && <h2 className='repos_title'>Repositories</h2>}
            {reposInfo.map((item, index) => (
                <div className='profile_repos_item' key={item.id}>
                    <div className='repos_index'>#{index + 1}</div>
                    <div className='repo_info'>
                        <div className='repo_name'>
                            <span>{item.name}</span>
                            <span>{item.visibility}</span>
                        </div>
                        <div className='repo_lang'>
                            <span>{item.language}</span>
                            <span>Updated <span className='updated'>{new Date(item.updated_at).toDateString()}</span></span>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
};

export default SearchProfileRepos;

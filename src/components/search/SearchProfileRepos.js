import React from 'react';
import { useSelector } from 'react-redux';

const SearchProfileRepos = () => {

    const repos = useSelector(state => state.searchRepos);
    const reposInfo = repos.repos.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1);
    console.log(reposInfo);

    return (
        <div className='profile_repos'>
            {reposInfo.length > 0 && <h2 className='repos_title'>Repositories <span className='repos_num'>{reposInfo.length}</span></h2>}
            {reposInfo.map((item, index) => (
                <a href={item.html_url} target="_blank" rel="noreferrer" className='profile_repos_item' key={item.id}>
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

export default SearchProfileRepos;

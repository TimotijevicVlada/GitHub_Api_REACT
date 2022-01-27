import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const SearchProfile = () => {

    const profile = useSelector(state => state.searchProfile);
    const profileInfo = profile.user;
    const repos = useSelector(state => state.searchRepos);
    const reposInfo = repos.repos;

    useEffect(() => {
        localStorage.setItem("github_profile", JSON.stringify({ profile: profileInfo, repos: reposInfo }));
    }, [profileInfo, reposInfo])

    return (
        <div className='search_profile'>
            {profileInfo.name && <h2 className='search_profile_title'>Profile</h2>}
            {profileInfo.name ?
                <div className='profile_wrapper'>
                    <div className='img_wrapper'>
                        <img src={profileInfo.avatar_url} alt={profileInfo.name} />
                    </div>
                    <div className='profile_info'>
                        <div className='profile_element'>
                            <span>Name</span>
                            <span>{profileInfo.name}</span>
                        </div>
                        <div className='profile_element'>
                            <span>Username</span>
                            <span>{profileInfo.login}</span>
                        </div>
                        <div className='profile_element'>
                            <span>Bio</span>
                            <span>{profileInfo.bio}</span>
                        </div>
                        <div className='profile_element'>
                            <span>GitHub link</span>
                            <a href={profileInfo.html_url} target="_blank" rel="noreferrer">GITHUB</a>
                        </div>
                        <div className='profile_element'>
                            <span>Location</span>
                            <span>{profileInfo.location}</span>
                        </div>
                        <div className='profile_element'>
                            <span>Repositories</span>
                            <span>{profileInfo.public_repos}</span>
                        </div>
                        <div className='profile_element'>
                            <span>Followers</span>
                            <span>{profileInfo.followers}</span>
                        </div>
                        <div className='profile_element'>
                            <span>Following</span>
                            <span>{profileInfo.following}</span>
                        </div>
                        <div className='profile_element'>
                            <span>Created</span>
                            <span>{new Date(profileInfo.created_at).toDateString()}</span>
                        </div>
                    </div>
                </div>
                : <h2 className='no_profile'>There is no profile yet</h2>
            }
        </div>
    )
};

export default SearchProfile;

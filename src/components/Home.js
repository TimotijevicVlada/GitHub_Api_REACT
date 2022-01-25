import { useContext } from 'react';
import { UserContext } from '../context/Context';

const Home = () => {

  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <div className='home'>
      Hello from HOME
    </div>
  )
};

export default Home;

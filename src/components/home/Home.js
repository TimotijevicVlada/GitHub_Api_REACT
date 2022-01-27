import User from "./User";
import Repositories from "./Repositories";
import { useSelector } from "react-redux";

const Home = () => {

  const user = useSelector(state => state.user);
  const repos = useSelector(state => state.repos);

  return (
    <div className={user.isLoading || repos.isLoading ? "home loading_mode" : 'home'}>
      <User />
      <Repositories />
    </div>
  )
};

export default Home;

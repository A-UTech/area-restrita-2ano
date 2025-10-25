import './Home.css'
import Hello from '../../components/Home/Hello/Hello'
import Profile from '../../components/Home/Profile/Profile';
import Tasks from '../../components/Home/Tasks/Tasks';
import Dashboard from '../../components/Home/Dashboard/Dashboard';

function Home() {
  return (
    <div>
      <div className="home-container">
        <Hello />
        <Profile />
      </div>
      <div className="actions-container">
        <Tasks />
        <Dashboard />
      </div>
    </div>
  );
}

export default Home;

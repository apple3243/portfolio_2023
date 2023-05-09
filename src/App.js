import './App.scss';
import Profile from './asset/Profile';
import About from './asset/About';
import Portfolio from './asset/Portfolio';

function App() {
  return (
    <>
      <div className="wrapper">
        <Profile></Profile>
        <About></About>
        <Portfolio></Portfolio>
      </div>
    </>
  );
}

export default App;

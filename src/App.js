import './App.css';
import Creator_Registration from './components/Creator_Registration';
import Donate from './components/Donate';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <>
      <Donate />
      <Registration />
      <Creator_Registration/>
      <Login/>
    </>
  );
}

export default App;

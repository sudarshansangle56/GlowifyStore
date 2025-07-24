import logo from './logo.svg';
import './App.css';
import Navabr from './components/Navabr';
import Header from './components/Header';
import Skin from './components/Skin';
import Para from './components/Para';
import Why from './pages/Why';
import Best from './pages/Best';
import Image from './pages/Image';

function App() {
  return (
    <div className="">
      <Navabr/>
      <Header/>
      <Skin/>
      <Para/>
      <Why/>
      <Best/>
      <Image/>
     <h1 className='font-bold'>ok</h1>
    </div>
  );
}

export default App;

import './App.css';
import Intro from './components/Intro.js'
import About from './components/About.js'

function App() {
  return (
    <div className='App'>
      <h1>Samuel Grasse-Haroldsen</h1>
      <h2>Hacker at large</h2>
      <div className='image-container'>
        <img className='image' src='images/sam2.JPG'></img>
      </div>
      <Intro />
      <About />
    </div>
  );
}

export default App;

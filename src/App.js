import './App.css';
import Intro from './components/Intro.js'
import About from './components/About.js'
import Terminal from './components/Terminal'

function App() {
  return (
    <div className='App'>
      <h1>Samuel Grasse-Haroldsen</h1>
      <h2>in an instance</h2>
      <div className='image-container'>
        <img className='image' src='images/sam_3.png' alt='Me'></img>
        <Terminal />
      </div>
      <Intro />
      <About />
    </div>
  );
}

export default App;

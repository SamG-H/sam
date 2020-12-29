import './App.css';
import Intro from './components/Intro.js'
import About from './components/About.js'

function App() {
  return (
    <div style={{ 
      backgroundImage: 'url(/images/forest.jpg)',
      height: '500px' }}>
      <h1>Hi! My name is Sam!</h1>
      <Intro />
      <About />
    </div>
  );
}

export default App;

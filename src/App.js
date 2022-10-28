import Hero from './components/Hero';
import './App.css';

function App() {
  const myName = ''
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        {myName //check this condition
          ? <p>Welcome Back.</p> //do this if true
          : <p>Please Login Above</p> //do this if false
        }
        <p> Hello {myName || 'guest'}.</p>
      </header>
    </div>
  );
}

export default App;

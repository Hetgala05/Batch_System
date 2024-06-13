import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { useDarkMode } from './DarkModeContext';

function App() {

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div>
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <button 
          className={`toggle-button ${darkMode ? 'dark' : 'light'}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <Navbar />
        <Hero />
        <Footer />
      </div>
      
    </div>
  );
}

export default App;

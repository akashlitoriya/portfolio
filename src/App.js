import logo from './logo.svg';
import './App.css';
import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';

function App() {
  return (
    <div className='min-w-full w-screen h-screen bg-richgray-700 opacity-100'>
        <HeroSection />
        <SkillSection />
    </div>
  );
}

export default App;

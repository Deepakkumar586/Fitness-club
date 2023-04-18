import './App.css';

import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Reason from './Components/Reasons/Reason';
import Plan from './Components/Plan/Plan';
import Join from './Components/Join/Join';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plan />
      <Join />
      <Footer />

    </div>
  );
}

export default App;

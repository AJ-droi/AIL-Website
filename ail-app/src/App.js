import './App.css';
import About from './Components/About';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Home from './Components/Home'
import Services from './Components/Services';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;

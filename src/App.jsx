import './reset.css';
import './App.css';
import { Navbar, Header, About, Services, AllTech, Footer } from './components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <main className="main-content">
        <About />
        <Services />
        <AllTech />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Home from  './Home';
import Navbar from './navbar';
import Footer from './footer';




function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="home" exact component={Home} />
      </Switch>
    </Router>
    <Navbar />
    <Home />
    <Footer />
    </>
  );
}

export default App;

import { StrictMode } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { Route } from 'wouter'
import Conocimientos from './components/Conocimientos'
import About from './components/About'
import Proyectos from './components/Proyectos'

function App() {




  return (
    <StrictMode>
      <Nav />
      <Route
        component={About}
        path="/"
      />
      <Route
        component={Conocimientos}
        path="/Conocimientos"
      />
      <Route
        component={Proyectos}
        path="/Proyectos"
      />
      <Footer />
    </StrictMode>
  );
}

export default App;



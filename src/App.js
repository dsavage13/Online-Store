import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from "./components/footer.jsx";

function App(){
  return(
    <div className='App'>
      <Navbar></Navbar>
      <h1 className='content'>Hello World React</h1>
      <Footer></Footer>
    </div>
  );
}

export default App;
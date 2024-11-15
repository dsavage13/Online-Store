import './App.css';
import Navbar from './components/navbar.jsx';
import Footer from "./components/footer.jsx";
import Products from './components/products.jsx';

function App(){
  return(
    <div className='App'>
      <Navbar></Navbar>
      <h1 className='content'>Hello World React</h1>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
import './App.css'
import { Footer } from './pages/footer/footer';
import { Navbar } from './pages/navbar/navbar';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products'

function App() {
  

  const myJSX = (
  < >
    <Navbar title="Día de Harry Potter"/>
    <Home name="Lord Yorchmort" hogwartsHome="Hufflepuff"/>
    <Products />
    <Footer cohorte={54}/>
  </ >
);

return myJSX;

}



export default App

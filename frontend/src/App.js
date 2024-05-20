import { Container } from 'react-bootstrap';
import {Route} from 'wouter'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
function App() {
  return (
    <div>
      <Header/>
        <main className='py-2'> 
          <BrowserRouter>
              <Route path="/home" component={HomeScreen} />
              <Route path="/product/:id" component={ProductScreen} />             
          </BrowserRouter>
        </main>
      <Footer />

      </div>
  );
}    

export default   App;

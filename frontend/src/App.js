import { Container } from 'react-bootstrap';
import {Route} from 'wouter'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';



function App() {

  
  return (
    <div>
      <Header/>
        <main className='py-2'> 
          <BrowserRouter>
              <Route path="/home" component={HomeScreen} />
              <Route path="/product/:id" component={ProductScreen} /> 
              <Route path="/cart/:id?" component={CartScreen} />             
              <Route path="/login" component={LoginScreen} />
              <Route path="/register" component={RegisterScreen} />
              <Route path="/profile" component={ProfileScreen} />

          </BrowserRouter>
        </main>
      <Footer />

      </div>
  );
}    

export default   App;

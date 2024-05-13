import { Container } from 'react-bootstrap';
import {Route} from 'wouter'
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
function App() {
  return (
    <div>
      <Header/>
        <main className='py-2'> 
          <Container>
              <Route path="/home" component={HomeScreen} />
              <Route path="/product/:id" component={ProductScreen} />

          </Container>
        </main>
      <Footer />

      </div>
  );
}    

export default   App;

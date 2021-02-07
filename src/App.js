import './scss/App.scss';
import { ProductsProvider } from './context/ProductsContext';
import Buscador from './components/Buscador';
import Items from './components/Items';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <main>
        <ProductsProvider>
          <BrowserRouter>
            <Buscador />

            <Switch>
              <Route exact path='/'></Route>

              <Route exact path='/items'>
                <Items/>
              </Route>

              <Route exact path='/items/:id'></Route>
            </Switch>
          </BrowserRouter>
        </ProductsProvider>
      </main>
    </div>
  );
}

export default App;

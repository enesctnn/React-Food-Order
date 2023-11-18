import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <main className="container mx-auto mt-10 px-20">
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;

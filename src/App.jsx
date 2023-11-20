import Checkout from "./components/Checkout";
import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';
import { UserProgressContextProvider } from './store/UserProgressContext';

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Checkout/>
        <main className="container mx-auto mt-10 px-20">
          <Meals />
        </main>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;

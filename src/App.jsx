import Header from './components/Header';
import Meals from './components/Meals';

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-10 px-20">
        <Meals />
      </main>
    </>
  );
}

export default App;

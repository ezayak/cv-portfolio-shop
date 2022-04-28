import './App.css';
import { Header } from './layout/Header';
import {Footer} from './layout/Footer';
import { Main } from './layout/Main';
import { ContextProvider } from './context';

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Main />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;

import { Header } from './components/header/Header';

import './App.css';
import { Footer } from './components/footer/Footer';
import { Main } from './pages/main/Main';

function App() {
  return (<div class="app">
  <div class="top">
    <Header />
   <Main />
  </div>
  <Footer />
</div>
  );
}

export default App;

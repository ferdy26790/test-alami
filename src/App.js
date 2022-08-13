import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { useContext } from 'react';
import { StoreContext } from './context/storeContext';

function App() {
  const { menuActive } = useContext(StoreContext)
  let page = <Home />
  switch (menuActive) {
    case 'about':
      page=<About />
      break;
    case 'contact':
      page=<Contact />
      break;
    default:
      break;
  }
  return (
      <Layout>
        {page}
      </Layout>
  );
}

export default App;

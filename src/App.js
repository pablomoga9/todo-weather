import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter/>
        <Main/>
      <BrowserRouter/>
      <Footer/>
    </div>
  );
}

export default App;

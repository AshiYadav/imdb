import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import Banner from './banner'
import Movies from './Movies'
import WatchList from './WatchList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path="/" element={<><Banner />
              <Movies /></>} />
            <Route path="/watchlist" element={<WatchList />} />


          </Routes>
        </BrowserRouter>
      </>
    </div>

  );
}

export default App;

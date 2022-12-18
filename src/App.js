
import './App.css';
import Header from './components/header';
import Home from './pages/Home';
import Footer from './components/footer';
import MovieDetail from './pages/movieDetailPage';
import PageNotFound from './pages/PageNotFound';
import { Link } from 'react-router-dom';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/moviedetail/:id' element={<MovieDetail/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;

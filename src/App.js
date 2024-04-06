import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import ProductPage from './components/Products/ProductPage';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='/add-product' element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

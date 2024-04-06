import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductList from '../Products/ProductList';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
   
      navigate('/login'); 
    }
  }, [navigate]);

  return (
    <>
      <ProductList/>
    </>
  );
}

export default Home;

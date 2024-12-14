import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import productsData from './assets/products.json';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator products={products} setProducts={setProducts} />
    </NavigationContainer>
  );
}

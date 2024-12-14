// screens/HomeScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, Image } from 'react-native';

const HomeScreen = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    description: '',
    quantity: '',
    photo: ''
  });

  const handleAddProduct = () => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    setNewProduct({ id: '', name: '', description: '', quantity: '', photo: '' });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleUpdateProduct = (id, updatedProduct) => {
    setProducts(products.map(product => (product.id === id ? updatedProduct : product)));
  };

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.quantity}</Text>
            {item.photo && <Image source={{ uri: item.photo }} style={{ width: 50, height: 50 }} />}
            <Button title="Delete" onPress={() => handleDeleteProduct(item.id)} />
          </View>
        )}
      />
      <TextInput
        placeholder="Name"
        value={newProduct.name}
        onChangeText={(text) => setNewProduct({ ...newProduct, name: text })}
      />
      <TextInput
        placeholder="Description"
        value={newProduct.description}
        onChangeText={(text) => setNewProduct({ ...newProduct, description: text })}
      />
      <TextInput
        placeholder="Quantity"
        value={newProduct.quantity}
        onChangeText={(text) => setNewProduct({ ...newProduct, quantity: text })}
      />
      <TextInput
        placeholder="Photo URL"
        value={newProduct.photo}
        onChangeText={(text) => setNewProduct({ ...newProduct, photo: text })}
      />
      <Button title="Add Product" onPress={handleAddProduct} />
    </View>
  );
};

export default HomeScreen;

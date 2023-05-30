import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';


const App = () => {
  return (
    <ScrollView>
      <Text>Sim</Text>
      <View>
        <Text>Bonitim</Text>
        <Image
          source={{
            uri: 'https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          fontSize: 20,
        }}
        defaultValue="Escreva aqui - Bonitin"
      />
    </ScrollView>
  );
};

export default App;
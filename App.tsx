import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCards from './components/PokemonCards';

type PokemonProp = {
  name: String,
  image: any,
  type: String,
  hp: Number,
  moves: Array<String>,
  weakness: Array<String>
};

export default function App() {
  const charm = {
    name: "Charm",
    image: require("./assets/image1.png"),
    type: "fire",
    hp: 39,
    moves: ["scratch", "ember", "growl"],
    weakness: ["water", "air"]
  };
  const squirel = {
    name: "Squirel",
    image: require("./assets/image2.png"),
    type: "Water",
    hp: 39,
    moves: ["scratch", "ember", "growl"],
    weakness: ["Fire", "air"]
  };
  const Genye = {
    name: "Genye",
    image: require("./assets/image3.png"),
    type: "grass",
    hp: 39,
    moves: ["scratch", "ember", "growl"],
    weakness: ["wamarasta", "air"]
  };
  const Cameni = {
    name: "Cameni",
    image: require("./assets/image4.png"),
    type: "electric",
    hp: 39,
    moves: ["scratch", "ember", "growl"],
    weakness: ["stone", "air"]
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <PokemonCards {...charm} />
      <PokemonCards {...squirel} />
      <PokemonCards {...Genye} />
      <PokemonCards {...Cameni} />
      </ScrollView>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

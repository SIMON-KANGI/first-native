import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Platform, ScrollView, Dimensions } from 'react-native';
import PokemonCards from './components/PokemonCards';

type PokemonProp = {
  name: string;
  image: any;
  type: string;
  hp: number;
  moves: string[];
  weakness: string[];
};

const App: React.FC = () => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');

  useEffect(() => {
    const updateOrientation = () => {
      const { width, height } = Dimensions.get('window');
      if (width > height) {
        setOrientation('landscape');
      } else {
        setOrientation('portrait');
      }
    };

    // Initial check
    updateOrientation();

    // Add event listener
    Dimensions.addEventListener('change', updateOrientation);

    // Cleanup event listener
    return () => {
      Dimensions.removeEventListener('change', updateOrientation);
    };
  }, []);

  const charm: PokemonProp = {
    name: "Charm",
    image: require("./assets/image1.png"),
    type: "fire",
    hp: 39,
    moves: ["scratch", "ember", "growl"],
    weakness: ["water", "air"]
  };
  const squirel: PokemonProp = {
    name: "Squirel",
    image: require("./assets/image2.png"),
    type: "water",
    hp: 39,
    moves: ["scratch", "ember", "growl"],
    weakness: ["fire", "air"]
  };
  const genye: PokemonProp = {
    name: "Genye",
    image: require("./assets/image3.png"),
    type: "grass",
    hp: 39,
    moves: ["scratch", "ember", "growl"],
    weakness: ["wamarasta", "air"]
  };
  const cameni: PokemonProp = {
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
        <PokemonCards {...charm} orientation={orientation} />
        <PokemonCards {...squirel} orientation={orientation} />
        <PokemonCards {...genye} orientation={orientation} />
        <PokemonCards {...cameni} orientation={orientation} />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

export default App;
